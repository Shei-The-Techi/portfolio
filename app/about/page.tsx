import type { Metadata } from "next";
import { CtaBand } from "@/components/home/CtaBand";
import { CapabilityGrid } from "@/components/about/CapabilityGrid";
import { Timeline } from "@/components/about/Timeline";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import Story from "@/content/about/story.mdx";
import { about } from "@/lib/about";
import { home } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero title="About" />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={home.about.eyebrow}
              title={home.about.title}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5">
              <Story />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="dark">
        <Reveal>
          <SectionHeading
            eyebrow={about.problem.eyebrow}
            title={about.problem.title}
            className="max-w-3xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            {about.problem.text}
          </p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {about.problem.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className="h-full">
              <SpotlightCard accent className="h-full">
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{card.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <Reveal>
          <SectionHeading
            eyebrow={about.trajectory.eyebrow}
            title={about.trajectory.title}
            className="max-w-3xl"
          />
        </Reveal>
        <div className="mt-14">
          <Timeline />
        </div>
      </Section>

      <Section tone="dark">
        <div className="space-y-14">
          {about.philosophy.map((statement, index) => (
            <Reveal key={statement} delay={index * 0.1}>
              <p className="max-w-4xl border-l-4 border-brand-cyan pl-6 text-2xl font-semibold leading-snug tracking-tight sm:text-4xl">
                {statement}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <Reveal>
          <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            <span aria-hidden="true" className="h-4 w-1 bg-brand-cyan" />
            {about.scope.eyebrow}
          </p>
          <CapabilityGrid />
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
