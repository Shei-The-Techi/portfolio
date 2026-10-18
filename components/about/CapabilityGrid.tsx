"use client";

import { useState } from "react";
import { LuCheck, LuUsers } from "react-icons/lu";
import { cn } from "@/lib/cn";
import { about } from "@/lib/about";

type Tab = "own" | "specialist";

const { scope } = about;

export function CapabilityGrid() {
  const [tab, setTab] = useState<Tab>("own");
  const group = scope[tab];
  const Icon = tab === "own" ? LuCheck : LuUsers;

  return (
    <div>
      <div className="inline-flex flex-wrap gap-2 rounded-xl border border-border bg-surface p-1">
        {(["own", "specialist"] as const).map((key) => (
          <button
            key={key}
            type="button"
            aria-pressed={tab === key}
            onClick={() => setTab(key)}
            className={cn(
              "rounded-lg px-4 py-2 text-left text-sm font-semibold transition-colors",
              tab === key
                ? "bg-primary text-primary-foreground"
                : "text-muted hover:text-foreground",
            )}
          >
            {scope[key].label}
          </button>
        ))}
      </div>

      <ul
        key={tab}
        aria-label={group.label}
        className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {group.items.map((item, i) => (
          <li
            key={item}
            style={{ animationDelay: `${i * 70}ms` }}
            className="flex animate-rise items-start gap-3 rounded-xl border border-border bg-surface p-5"
          >
            <span
              className={cn(
                "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full",
                tab === "own"
                  ? "bg-brand-cyan text-brand-navy"
                  : "bg-brand-navy text-brand-offwhite",
              )}
            >
              <Icon aria-hidden="true" className="size-3.5" />
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>

      <ul
        aria-label="Environments"
        className="mt-8 flex flex-wrap items-center gap-2"
      >
        {scope.environments.map((env) => (
          <li
            key={env}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {env}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-3xl leading-relaxed text-muted">{scope.note}</p>
    </div>
  );
}
