import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

export function Section({
  className,
  children,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
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
    <div className={cn("flex flex-col gap-3", className)}>
      {eyebrow ? (
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span aria-hidden="true" className="h-4 w-1 bg-primary" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl font-bold tracking-tight sm:text-5xl">
        {title}
      </Heading>
    </div>
  );
}
