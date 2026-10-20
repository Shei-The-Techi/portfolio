import { type ContactInput, services, topics } from "@/lib/contact";

const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export async function sendContactEmail(data: ContactInput) {
  const topic = topics.find((item) => item.value === data.topic)?.label ?? data.topic;
  const service =
    services.find((item) => item.value === data.service)?.label ?? data.service;

  const text = [
    "New enquiry from the website",
    "",
    `Name: ${oneLine(data.name)}`,
    `Email: ${oneLine(data.email)}`,
    `Company: ${data.company ? oneLine(data.company) : "Not provided"}`,
    `Topic: ${topic}`,
    `Service: ${service}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !to) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("Email delivery is not configured.");
    }
    console.log(`[contact] Email is not configured, so this is a dry run:\n${text}`);
    return;
  }

  const response = await fetch(
    process.env.RESEND_API_URL ?? "https://api.resend.com/emails",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Website <onboarding@resend.dev>",
        to,
        reply_to: oneLine(data.email),
        subject: `New enquiry from ${oneLine(data.name)}`,
        text,
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Email provider responded with status ${response.status}.`);
  }
}
