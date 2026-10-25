import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { who } from "@/lib/home";
import { site } from "@/lib/site";

export function WhoIAm() {
  return (
    <section
      data-tone="dark"
      className="relative isolate overflow-hidden bg-background pb-24 pt-24 text-foreground sm:pb-32 sm:pt-32"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/images/about.webp"
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/10" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <div className="rounded-3xl border border-foreground/10 bg-background/55 p-8 backdrop-blur-md sm:p-10">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-4 w-1 bg-primary" />
              {who.eyebrow}
            </p>
            <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
              {who.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-foreground/75">
              {who.text}
            </p>
            <div className="mt-8">
              <ButtonLink href={site.links.about.href} size="lg">
                {site.links.about.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <ul className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
          {who.sectors.map((sector, i) => (
            <li
              key={sector}
              style={{ animationDelay: `${i * 0.9}s` }}
              className="animate-float rounded-2xl border border-foreground/15 bg-foreground/10 px-5 py-3 text-base font-medium backdrop-blur-md"
            >
              {sector}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
