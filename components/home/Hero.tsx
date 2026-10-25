import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";
import { PointerGlow } from "@/components/home/PointerGlow";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Magnetic } from "@/components/ui/Magnetic";
import { hero } from "@/lib/home";
import { site } from "@/lib/site";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const signals = [
  "M1728 905 C 1660 760, 1560 620, 1500 500",
  "M1728 905 C 1800 720, 1880 520, 1900 380",
  "M1728 905 C 1900 700, 2050 420, 2150 250",
  "M1728 905 C 1500 800, 1330 700, 1250 640",
  "M1728 905 C 1700 640, 1720 380, 1700 200",
];

export function Hero() {
  return (
    <section
      data-tone="dark"
      className="relative isolate overflow-hidden bg-background text-foreground"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="/images/hero.webp"
            alt=""
            fill
            preload
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
          <svg
            viewBox="0 0 2400 1200"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 size-full"
          >
            {signals.map((d, i) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="#f5b544"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="3 24"
                opacity="0.85"
                className="animate-signal"
                style={{ animationDelay: `${i * -1.1}s`, animationDuration: `${5 + i}s` }}
              />
            ))}
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/58 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/80 to-transparent" />
        <PointerGlow />
      </div>

      <Container className="relative flex min-h-[92svh] flex-col items-start justify-center gap-7 pb-28 pt-36">
        <p
          style={delay(0)}
          className="flex animate-rise items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm"
        >
          <span aria-hidden="true" className="h-4 w-1 bg-primary" />
          {site.role}
        </p>
        <h1
          style={delay(120)}
          className="animate-rise text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl"
        >
          {site.name}
        </h1>
        <p
          style={delay(260)}
          className="max-w-xl animate-rise text-lg leading-relaxed text-foreground/80 sm:text-xl"
        >
          {hero.tagline}
        </p>
        <div style={delay(400)} className="flex animate-rise flex-wrap gap-4">
          <Magnetic>
            <ButtonLink href={site.cta.href} size="lg">
              {site.cta.label}
            </ButtonLink>
          </Magnetic>
          <ButtonLink href={site.links.work.href} variant="secondary" size="lg">
            {site.links.work.label}
          </ButtonLink>
        </div>
        <ul style={delay(560)} className="mt-4 flex animate-rise flex-wrap gap-3">
          {hero.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-foreground/15 bg-foreground/5 px-4 py-1.5 text-sm text-foreground/80 backdrop-blur"
            >
              {chip}
            </li>
          ))}
        </ul>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-6 hidden justify-center text-foreground/60 sm:flex"
      >
        <LuChevronDown className="size-6 animate-bounce" />
      </div>
    </section>
  );
}
