import { CtaBand } from "@/components/home/CtaBand";
import { OperatingScene } from "@/components/home/OperatingScene";
import { ServicesBento } from "@/components/home/ServicesBento";
import { WorkTickets } from "@/components/home/WorkTickets";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { home } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <OperatingScene />

      <Section tone="light">
        <Reveal>
          <SectionHeading
            eyebrow={home.work.eyebrow}
            title={home.work.title}
            className="max-w-3xl"
          />
        </Reveal>
        <WorkTickets />
        <Reveal className="mt-10">
          <ButtonLink href={site.links.work.href} variant="secondary" size="lg">
            {site.links.work.label}
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="dark">
        <Reveal>
          <SectionHeading
            eyebrow={home.about.eyebrow}
            title={home.about.title}
            className="max-w-3xl"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {home.about.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.08} className="h-full">
              <SpotlightCard className="h-full">
                <h3 className="text-lg font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{point.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <ButtonLink href={site.links.about.href} size="lg">
            {site.links.about.label}
          </ButtonLink>
        </Reveal>
      </Section>

      <Section tone="light">
        <Reveal>
          <SectionHeading
            eyebrow={home.services.eyebrow}
            title={home.services.title}
            className="max-w-3xl"
          />
        </Reveal>
        <ServicesBento />
        <Reveal className="mt-10">
          <ButtonLink href={site.links.pricing.href} size="lg">
            {site.links.pricing.label}
          </ButtonLink>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  );
}
