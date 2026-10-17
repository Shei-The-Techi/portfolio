import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type CardProps = ComponentProps<"div"> & { accent?: boolean };

export function Card({ accent = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        accent && "border-t-2 border-t-primary",
        className,
      )}
      {...props}
    />
  );
}
