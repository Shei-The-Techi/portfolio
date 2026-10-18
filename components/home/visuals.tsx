"use client";

import { motion, useReducedMotion } from "motion/react";
import { LuCheck } from "react-icons/lu";

const view = { once: true, margin: "-60px" } as const;

export function Checklist({ items }: { items: readonly string[] }) {
  const reduce = useReducedMotion();

  return (
    <ul className="mt-6 space-y-3">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-relaxed text-muted"
        >
          <motion.span
            initial={reduce ? false : { scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={view}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 18,
              delay: 0.25 + i * 0.2,
            }}
            className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-cyan text-brand-navy"
          >
            <LuCheck aria-hidden="true" className="size-3" />
          </motion.span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Converge() {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    initial: reduce ? false : { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: view,
    transition: { duration: 1, delay, ease: "easeInOut" as const },
  });

  return (
    <svg
      viewBox="0 0 220 60"
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
      className="mt-6 h-16 w-full max-w-xs"
    >
      <motion.path
        d="M4 8 C 70 8, 100 30, 200 30"
        className="fill-none stroke-brand-grey-400"
        strokeWidth="1.5"
        strokeLinecap="round"
        {...draw(0)}
      />
      <motion.path
        d="M4 52 C 70 52, 100 30, 200 30"
        className="fill-none stroke-brand-grey-400"
        strokeWidth="1.5"
        strokeLinecap="round"
        {...draw(0.15)}
      />
      <motion.path
        d="M4 30 L 200 30"
        className="fill-none stroke-brand-cyan"
        strokeWidth="2"
        strokeLinecap="round"
        {...draw(0.3)}
      />
      <motion.circle
        cx="208"
        cy="30"
        r="5"
        className="fill-brand-cyan"
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        initial={reduce ? false : { scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={view}
        transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1.1 }}
      />
    </svg>
  );
}

export function StatusLog({ items }: { items: readonly string[] }) {
  const reduce = useReducedMotion();

  return (
    <ul className="mt-6 space-y-2">
      {items.map((item, i) => (
        <li
          key={item}
          className="flex items-center justify-between rounded-lg border border-border px-3 py-2 text-sm text-muted"
        >
          {item}
          <motion.span
            aria-hidden="true"
            initial={reduce ? false : { backgroundColor: "#f5a524" }}
            whileInView={{ backgroundColor: "#2fd7fd" }}
            viewport={view}
            transition={{ delay: 0.5 + i * 0.35, duration: 0.4 }}
            className="size-2.5 rounded-full bg-brand-cyan"
          />
        </li>
      ))}
    </ul>
  );
}
