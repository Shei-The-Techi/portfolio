import { ButtonLink } from "@/components/ui/Button";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { cta } from "@/lib/home";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <Section
      tone="dark"
      className="relative isolate overflow-hidden pb-14 pt-14 sm:pb-16 sm:pt-16"
    >
      <HeroBackground />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 left-1/2 -z-10 h-56 w-[60rem] -translate-x-1/2 rounded-full bg-brand-amber/20 blur-3xl"
      />
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-4 w-1 bg-primary" />
              {cta.eyebrow}
            </p>
            <h2 className="mt-4 max-w-2xl text-balance text-2xl font-bold leading-[1.2] tracking-tight sm:text-4xl">
              {cta.text}
            </h2>
          </div>
          <Magnetic>
            <ButtonLink href={site.cta.href} size="lg">
              {site.cta.label}
            </ButtonLink>
          </Magnetic>
        </div>
      </Reveal>
    </Section>
  );
}
