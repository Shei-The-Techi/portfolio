import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { OperatingScene } from "@/components/home/OperatingScene";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
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
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {home.work.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className="h-full">
              <Link href={site.links.work.href} className="group block h-full">
                <Card accent interactive className="flex h-full flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent md:min-h-8">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-6 text-sm text-muted">
                    <span>{item.period}</span>
                    <LuArrowUpRight
                      aria-hidden="true"
                      className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
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
              <Card className="h-full">
                <h3 className="text-lg font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{point.text}</p>
              </Card>
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
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {home.services.items.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08} className="h-full">
              <Card className="h-full">
                <p className="text-sm font-semibold tracking-[0.2em] text-accent">
                  {item.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <ButtonLink href={site.links.pricing.href} size="lg">
            {site.links.pricing.label}
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
