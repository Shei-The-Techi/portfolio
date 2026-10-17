import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="Contact" />
    </Section>
  );
}
