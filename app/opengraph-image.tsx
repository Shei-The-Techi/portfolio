import { ogImage } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = "Victor Chege, IT Operations and Business Systems Consultant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogImage({ title: site.name, eyebrow: site.role });
}
