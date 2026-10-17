import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <Section>
      <SectionHeading as="h1" title="Blog" />
    </Section>
  );
}
