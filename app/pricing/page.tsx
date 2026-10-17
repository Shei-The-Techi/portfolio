import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return <PageHero title="Pricing" />;
}
