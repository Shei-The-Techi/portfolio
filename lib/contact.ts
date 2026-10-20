import { z } from "zod";

const topicValues = [
  "recurring-issue",
  "system-change",
  "supplier-dependency",
  "process",
  "other",
] as const;

const serviceValues = [
  "health-check",
  "systems-improvement",
  "fractional-ops",
  "not-sure",
] as const;

export const topics: { value: (typeof topicValues)[number]; label: string }[] = [
  { value: "recurring-issue", label: "A recurring IT issue" },
  { value: "system-change", label: "An upcoming system change" },
  { value: "supplier-dependency", label: "An unresolved supplier dependency" },
  {
    value: "process",
    label: "A process that is harder to manage than it should be",
  },
  { value: "other", label: "Something else" },
];

export const services: { value: (typeof serviceValues)[number]; label: string }[] = [
  { value: "health-check", label: "IT and Systems Health Check" },
  { value: "systems-improvement", label: "Business Systems Improvement" },
  { value: "fractional-ops", label: "Fractional IT Operations and Support" },
  { value: "not-sure", label: "Not sure yet" },
];

export const contactCopy = {
  steps: ["Your details", "Your topic", "Your message"],
  labels: {
    name: "Name",
    email: "Email",
    company: "Company (optional)",
    topic: "What brings you here",
    service: "Service of interest",
    message: "Message",
    consent: "I agree to my details being used to reply to this enquiry.",
  },
  buttons: { next: "Next", back: "Back", send: "Send message", sending: "Sending" },
  success: {
    title: "Message sent",
    text: "Thank you. I will reply to the email address you provided.",
  },
  failure: "Your message could not be sent. Please try again in a few minutes.",
  rateLimited: "Too many attempts. Please try again later.",
  tooFast: "Please take a moment to complete the form and try again.",
  errors: {
    name: "Enter your name",
    email: "Enter a valid email address",
    topic: "Choose one option",
    service: "Choose one option",
    message: "Write at least a few words",
    consent: "Please confirm to continue",
  },
  booking: {
    text: "A short discovery discussion helps clarify the outcome you need and whether the right next step is a systems health check, a focused improvement, ongoing support or specialist help outside my direct scope.",
    label: "Book a call",
  },
} as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, contactCopy.errors.name).max(80, contactCopy.errors.name),
  email: z
    .string()
    .trim()
    .max(120, contactCopy.errors.email)
    .pipe(z.email(contactCopy.errors.email)),
  company: z.string().trim().max(100).optional(),
  topic: z.enum(topicValues, contactCopy.errors.topic),
  service: z.enum(serviceValues, contactCopy.errors.service),
  message: z
    .string()
    .trim()
    .min(10, contactCopy.errors.message)
    .max(2000, contactCopy.errors.message),
  consent: z.literal("on", contactCopy.errors.consent),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type FieldName = keyof ContactInput;
export type FieldErrors = Partial<Record<FieldName, string>>;

export type ContactResult =
  | { ok: true }
  | { ok: false; message?: string; errors?: FieldErrors };

export function toFieldErrors(issues: z.core.$ZodIssue[]): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of issues) {
    const key = issue.path[0] as FieldName | undefined;
    if (key && !errors[key]) errors[key] = issue.message;
  }
  return errors;
}
