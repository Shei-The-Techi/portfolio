import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <PageHero title="Contact" />;
}
