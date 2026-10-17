import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="Pricing" />
    </Section>
  );
}
