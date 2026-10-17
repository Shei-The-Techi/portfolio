import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type CardProps = ComponentProps<"div"> & {
  accent?: boolean;
  interactive?: boolean;
};

export function Card({
  accent = false,
  interactive = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        interactive &&
          "transition duration-300 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_16px_40px_-16px_rgb(10_17_40/0.35)]",
        className,
      )}
      {...props}
    >
      {accent ? (
        <span aria-hidden="true" className="block h-[3px] w-7 bg-brand-cyan" />
      ) : null}
      {children}
    </div>
  );
}
