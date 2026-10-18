import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

type CaseSectionProps = {
  number: string;
  label: string;
  children: ReactNode;
};

export function CaseSection({ number, label, children }: CaseSectionProps) {
  return (
    <Reveal>
      <section>
        <p className="text-sm font-semibold tracking-[0.2em] text-accent">
          {number}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {label}
        </h2>
        <div className="mt-6 space-y-5">{children}</div>
      </section>
    </Reveal>
  );
}
