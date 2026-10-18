import { ButtonLink } from "@/components/ui/Button";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { home } from "@/lib/content";
import { site } from "@/lib/site";

export function CtaBand() {
  return (
    <Section tone="dark" className="relative isolate overflow-hidden">
      <HeroBackground />
      <Reveal>
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <span aria-hidden="true" className="h-4 w-1 bg-brand-cyan" />
          {home.cta.eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl">
          {home.cta.text}
        </h2>
        <div className="mt-10">
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
