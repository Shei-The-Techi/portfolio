import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function NotFound() {
  return (
    <section
      data-tone="dark"
      className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-background text-foreground"
    >
      <HeroBackground />
      <Container className="pt-24">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <span aria-hidden="true" className="h-4 w-1 bg-brand-cyan" />
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
          Page not found
        </h1>
        <div className="mt-8">
          <ButtonLink href="/" size="lg">
            Home
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
