import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <div
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay * 100}%` } as CSSProperties}
    >
      {children}
    </div>
  );
}
