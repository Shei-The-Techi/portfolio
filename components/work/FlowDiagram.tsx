"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Step = { title: string; text: string };

export function FlowDiagram({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!inView || touched || reduceMotion) return;
    const timers = steps.map((_, i) =>
      setTimeout(() => setActive(i), i * 1400),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, touched, reduceMotion, steps]);

  const choose = (index: number) => {
    setTouched(true);
    setActive(index);
  };

  return (
    <div ref={ref} className="rounded-xl border border-border bg-surface p-6">
      <div className="h-px w-full bg-border">
        <div
          className="h-px origin-left bg-brand-cyan transition-transform duration-500"
          style={{ transform: `scaleX(${(active + 1) / steps.length})` }}
        />
      </div>
      <ol className="mt-6 flex flex-col gap-2 sm:flex-row">
        {steps.map((step, i) => (
          <li key={step.title} className="flex-1">
            <button
              type="button"
              aria-pressed={i === active}
              onClick={() => choose(i)}
              className={cn(
                "w-full rounded-lg border px-4 py-3 text-left transition-colors",
                i === active
                  ? "border-brand-cyan bg-brand-cyan/10 text-foreground"
                  : "border-border text-muted hover:text-foreground",
              )}
            >
              <span className="block text-xs font-semibold tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block font-semibold">{step.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <p aria-live="polite" className="mt-5 min-h-[3.5rem] leading-relaxed text-muted">
        {steps[active].text}
      </p>
    </div>
  );
}
