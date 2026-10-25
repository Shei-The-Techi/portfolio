"use client";

import { LuArrowUp } from "react-icons/lu";

export function BackToTop() {
  const scrollTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      className="group inline-flex items-center gap-3 rounded-full border border-border py-2 pl-5 pr-2 text-sm font-medium transition-colors hover:border-primary"
    >
      Back to top
      <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:-translate-y-1">
        <LuArrowUp aria-hidden="true" className="size-4" />
      </span>
    </button>
  );
}
