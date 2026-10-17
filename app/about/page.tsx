import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="About" />
    </Section>
  );
}
