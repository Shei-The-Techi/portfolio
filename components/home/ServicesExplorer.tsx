"use client";

import { useState } from "react";
import {
  LuArrowLeftRight,
  LuCheck,
  LuLink,
  LuRefreshCw,
  LuWorkflow,
} from "react-icons/lu";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { servicesIntro } from "@/lib/home";
import { engagements, situations } from "@/lib/services";
import { site } from "@/lib/site";

const icons = {
  "recurring-issue": LuRefreshCw,
  "system-change": LuArrowLeftRight,
  "supplier-dependency": LuLink,
  process: LuWorkflow,
} as const;

type SituationId = (typeof situations)[number]["id"];

export function ServicesExplorer() {
  const [selected, setSelected] = useState<SituationId>(situations[0].id);
  const situation = situations.find((item) => item.id === selected) ?? situations[0];
  const service = engagements[situation.service];
  const { labels } = servicesIntro;

  return (
    <div className="mt-12">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
        {servicesIntro.prompt}
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {situations.map((item) => {
          const Icon = icons[item.id];
          const active = item.id === selected;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              onClick={() => setSelected(item.id)}
              className={cn(
                "group relative flex h-full flex-col items-start gap-4 rounded-2xl border p-5 text-left transition duration-300",
                active
                  ? "-translate-y-1 border-brand-amber bg-surface shadow-[0_20px_40px_-22px_rgb(245_165_36/0.9)]"
                  : "border-border bg-surface/60 hover:-translate-y-1 hover:border-foreground/30 hover:bg-surface",
              )}
            >
              <span
                className={cn(
                  "flex size-11 items-center justify-center rounded-xl transition-colors duration-300",
                  active
                    ? "bg-brand-amber text-brand-navy"
                    : "bg-foreground/5 text-foreground group-hover:bg-foreground/10",
                )}
              >
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <span className="text-base font-semibold leading-snug">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div
        key={selected}
        aria-live="polite"
        className="mt-6 animate-rise overflow-hidden rounded-3xl border border-border bg-surface"
      >
        <div
          aria-hidden="true"
          className="flex items-center gap-3 border-b border-border px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted sm:px-8"
        >
          <span>{labels.situation}</span>
          <span className="h-0.5 flex-1 origin-left animate-draw bg-brand-amber" />
          <span>{labels.start}</span>
          <span
            className="h-0.5 flex-1 origin-left animate-draw bg-brand-amber"
            style={{ animationDelay: "0.35s" }}
          />
          <span>{labels.change}</span>
        </div>

        <div className="grid gap-px bg-border lg:grid-cols-[1.1fr_1fr_1fr]">
          <div className="bg-surface p-8">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent">
              {service.number}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight">
              {service.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted">{service.text}</p>
            <div className="mt-6">
              <ButtonLink href={site.cta.href}>{site.cta.label}</ButtonLink>
            </div>
          </div>

          <div className="bg-surface p-8">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {labels.receive}
            </h4>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.receive.map((item, i) => (
                <li
                  key={item}
                  style={{ animationDelay: `${150 + i * 90}ms` }}
                  className="animate-pop rounded-full border border-border bg-background px-4 py-2 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface p-8">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {labels.measure}
            </h4>
            <ul className="mt-5 space-y-3">
              {service.measures.map((item, i) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span
                    style={{ animationDelay: `${300 + i * 140}ms` }}
                    className="flex size-6 shrink-0 animate-pop items-center justify-center rounded-full bg-brand-amber text-brand-navy"
                  >
                    <LuCheck aria-hidden="true" className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
