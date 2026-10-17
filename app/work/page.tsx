import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="Work" />
    </Section>
  );
}
