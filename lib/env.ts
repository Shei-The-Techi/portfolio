const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? vercelUrl ?? "http://localhost:3000";

export const isIndexable = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL;
