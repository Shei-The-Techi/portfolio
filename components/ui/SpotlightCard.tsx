"use client";

import { type ComponentProps, type PointerEvent, useRef } from "react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

export function SpotlightCard({
  className,
  children,
  onPointerMove,
  ...props
}: ComponentProps<typeof Card>) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      el.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }
    onPointerMove?.(event);
  };

  return (
    <Card
      ref={ref}
      onPointerMove={handlePointerMove}
      className={cn("group/spot relative isolate overflow-hidden", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100 bg-[radial-gradient(360px_circle_at_var(--mx,50%)_var(--my,50%),rgb(47_215_253/0.16),transparent_70%)]"
      />
      {children}
    </Card>
  );
}
