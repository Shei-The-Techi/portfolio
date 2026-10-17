import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Terms and conditions" };

export default function TermsPage() {
  return <PageHero title="Terms and conditions" />;
}
