import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionProps = ComponentProps<"section"> & {
  tone?: "light" | "dark";
};

export function Section({
  tone = "light",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-tone={tone}
      className={cn(
        "bg-background py-20 text-foreground sm:py-28",
        className,
      )}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {eyebrow ? (
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          <span aria-hidden="true" className="h-4 w-1 bg-brand-cyan" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
        {title}
      </Heading>
    </div>
  );
}
