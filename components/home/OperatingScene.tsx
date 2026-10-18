"use client";

import {
  type MotionValue,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { type ReactNode, useRef, useState } from "react";
import { OperatingMap } from "@/components/home/OperatingMap";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { home } from "@/lib/content";
import { site } from "@/lib/site";
import { operatingMap, steps } from "@/lib/story";

const fade = (stage: number, index: number) =>
  Math.min(1, Math.max(0, 1 - (Math.abs(stage - index) - 0.25) / 0.25));

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

type PanelProps = {
  index: number;
  progress: MotionValue<number>;
  reduce: boolean;
  children: ReactNode;
};

function Panel({ index, progress, reduce, children }: PanelProps) {
  const opacity = useTransform(progress, (v) => fade(v * 4, index));
  const y = useTransform(progress, (v) =>
    (1 - fade(v * 4, index)) * 16 * (v * 4 < index ? 1 : -1),
  );
  const visibility = useTransform(opacity, (o) =>
    o > 0.02 ? "visible" : "hidden",
  ) as MotionValue<"visible" | "hidden">;

  if (reduce) {
    return <div className="flex flex-col items-start gap-5">{children}</div>;
  }

  return (
    <motion.div
      style={{ opacity, y, visibility }}
      className="absolute inset-0 flex flex-col items-start justify-center gap-5"
    >
      {children}
    </motion.div>
  );
}

export function OperatingScene() {
  const reduce = useReducedMotion() ?? false;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.4,
  });
  const bar = useTransform(progress, [0, 1], [0, 1], { clamp: true });
  const cue = useTransform(progress, [0, 0.04], [1, 0], { clamp: true });
  const [stage, setStage] = useState(0);

  useMotionValueEvent(progress, "change", (v) =>
    setStage(Math.round(Math.min(1, Math.max(0, v)) * 4)),
  );

  const shown = reduce ? 4 : stage;

  return (
    <section
      ref={ref}
      data-tone="dark"
      className={cn(
        "relative bg-background text-foreground",
        !reduce && "h-[500svh]",
      )}
    >
      <div className={cn("overflow-hidden", reduce ? "py-32" : "sticky top-0 h-svh")}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(246_247_249/0.08)_1px,transparent_0)] bg-[length:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />

        <Container className="relative flex h-full flex-col justify-center gap-4 pt-20 md:grid md:grid-cols-[1.05fr_1fr] md:items-center md:gap-10 md:pt-0">
          <div className="order-2 md:order-1">
            <div
              className={cn(
                reduce
                  ? "flex flex-col gap-16"
                  : "relative h-[19rem] sm:h-[24rem]",
              )}
            >
              <Panel index={0} progress={progress} reduce={reduce}>
                <p
                  style={delay(0)}
                  className="flex animate-rise items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent sm:text-sm"
                >
                  <span aria-hidden="true" className="h-4 w-1 bg-brand-cyan" />
                  {site.role}
                </p>
                <h1
                  style={delay(120)}
                  className="animate-rise text-4xl font-bold leading-[1.05] tracking-tight sm:text-7xl"
                >
                  {site.name}
                </h1>
                <p
                  style={delay(240)}
                  className="max-w-xl animate-rise text-base leading-relaxed text-muted sm:text-xl"
                >
                  {home.hero.text}
                </p>
                <div
                  style={delay(360)}
                  className="flex animate-rise flex-wrap gap-3"
                >
                  <ButtonLink href={site.cta.href} size="lg">
                    {site.cta.label}
                  </ButtonLink>
                  <ButtonLink
                    href={site.links.work.href}
                    variant="secondary"
                    size="lg"
                  >
                    {site.links.work.label}
                  </ButtonLink>
                </div>
              </Panel>

              {steps.slice(1).map((step, i) => (
                <Panel key={step.number} index={i + 1} progress={progress} reduce={reduce}>
                  <p className="text-sm font-semibold tracking-[0.2em] text-accent">
                    {step.number}
                  </p>
                  <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
                    {step.title}
                  </h2>
                  <p className="max-w-md text-base leading-relaxed text-muted sm:text-xl">
                    {step.text}
                  </p>
                </Panel>
              ))}
            </div>
          </div>

          <div className="order-1 flex flex-col items-center gap-4 md:order-2">
            <div className="aspect-square max-h-[36svh] w-full max-w-[34rem] md:max-h-none">
              <OperatingMap progress={progress} staticFinal={reduce} />
            </div>
            <div className="w-full max-w-[34rem]">
              <div className="h-px w-full bg-border">
                <motion.div
                  style={{ scaleX: reduce ? 1 : bar }}
                  className="h-px origin-left bg-brand-cyan"
                />
              </div>
              <p className="mt-3 flex justify-between gap-4 text-xs text-muted">
                <span>
                  {steps[shown].number} {steps[shown].title}
                </span>
                <span className="text-right">{operatingMap.status[shown]}</span>
              </p>
            </div>
          </div>
        </Container>

        {reduce ? null : (
          <motion.div
            aria-hidden="true"
            style={{ opacity: cue }}
            className="absolute inset-x-0 bottom-6 hidden justify-center text-muted sm:flex"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        )}
      </div>

      <ol className="sr-only">
        {steps.slice(1).map((step) => (
          <li key={step.number}>
            {step.title}: {step.text}
          </li>
        ))}
      </ol>
    </section>
  );
}
