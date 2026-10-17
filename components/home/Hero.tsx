import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { home } from "@/lib/content";
import { site } from "@/lib/site";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section
      data-tone="dark"
      className="relative isolate overflow-hidden bg-background text-foreground"
    >
      <HeroBackground />
      <Container className="flex min-h-[85svh] flex-col items-start justify-center gap-6 pb-24 pt-36 sm:pt-44">
        <p
          style={delay(0)}
          className="flex animate-rise items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm"
        >
          <span aria-hidden="true" className="h-4 w-1 bg-brand-cyan" />
          {site.role}
        </p>
        <h1
          style={delay(120)}
          className="animate-rise text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
        >
          {site.name}
        </h1>
        <p
          style={delay(240)}
          className="max-w-xl animate-rise text-lg leading-relaxed text-muted sm:text-xl"
        >
          {home.hero.text}
        </p>
        <div style={delay(360)} className="mt-2 flex animate-rise flex-wrap gap-3">
          <ButtonLink href={site.cta.href} size="lg">
            {site.cta.label}
          </ButtonLink>
          <ButtonLink href={site.links.work.href} variant="secondary" size="lg">
            {site.links.work.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
