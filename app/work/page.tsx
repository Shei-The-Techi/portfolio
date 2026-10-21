import type { Metadata } from "next";
import { WorkTickets } from "@/components/home/WorkTickets";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageHero title="Work" />
      <Section tone="light" className="pt-0 sm:pt-0">
        <WorkTickets headingLevel="h2" />
      </Section>
    </>
  );
}
