"use server";

import { headers } from "next/headers";
import {
  type ContactResult,
  contactCopy,
  contactSchema,
  toFieldErrors,
} from "@/lib/contact";
import { sendContactEmail } from "@/lib/email";
import { allowRequest } from "@/lib/rate-limit";

export async function submitContact(formData: FormData): Promise<ContactResult> {
  const raw = Object.fromEntries(formData);

  if (typeof raw.website === "string" && raw.website.length > 0) {
    return { ok: true };
  }

  const startedAt = Number(raw.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 3000) {
    return { ok: false, message: contactCopy.tooFast };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!allowRequest(ip)) {
    return { ok: false, message: contactCopy.rateLimited };
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, errors: toFieldErrors(parsed.error.issues) };
  }

  try {
    await sendContactEmail(parsed.data);
    return { ok: true };
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    return { ok: false, message: contactCopy.failure };
  }
}
