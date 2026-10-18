"use client";

import { motion, useReducedMotion } from "motion/react";
import { about } from "@/lib/about";
import { caseStudies } from "@/lib/work";

const [startYear, startMonth] = about.trajectory.start;
const [endYear, endMonth] = about.trajectory.end;
const monthIndex = (year: number, month: number) =>
  (year - startYear) * 12 + (month - startMonth);
const total = monthIndex(endYear, endMonth) + 1;
const pct = (value: number) => `${(value / total) * 100}%`;
const years = Array.from(
  { length: endYear - startYear },
  (_, i) => startYear + 1 + i,
);

export function Timeline() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative pb-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 bottom-6">
        {years.map((year) => (
          <span
            key={year}
            className="absolute inset-y-0 w-px bg-border"
            style={{ left: pct(monthIndex(year, 1)) }}
          />
        ))}
      </div>

      <ul className="relative space-y-8">
        {about.trajectory.items.map((item, index) => {
          const study = caseStudies.find((s) => s.slug === item.slug);
          if (!study) return null;
          const from = monthIndex(item.from[0], item.from[1]);
          const to = monthIndex(item.to[0], item.to[1]) + 1;
          return (
            <li key={item.slug} className="grid gap-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <span className="font-semibold">{study.title}</span>
                <span className="text-sm text-muted">{study.period}</span>
              </div>
              <div className="relative h-3 rounded-full bg-border/60">
                <motion.div
                  className="absolute inset-y-0 origin-left rounded-full bg-brand-cyan"
                  style={{ left: pct(from), width: `calc(${pct(to - from)})` }}
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-5">
        {years.map((year) => (
          <span
            key={year}
            className="absolute -translate-x-1/2 text-xs text-muted"
            style={{ left: pct(monthIndex(year, 1)) }}
          >
            {year}
          </span>
        ))}
      </div>
    </div>
  );
}
