import Link from "next/link";
import type { ComponentProps } from "react";
import { LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";
type StyleProps = { variant?: Variant; size?: Size; arrow?: boolean };

const base =
  "group/btn relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold transition-[transform,box-shadow,color] duration-300 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-12px_var(--primary)] after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:w-2/5 after:-translate-x-[170%] after:skew-x-[-20deg] after:bg-white/55 after:transition-transform after:duration-700 after:content-[''] hover:after:translate-x-[330%]",
  secondary:
    "border border-foreground/35 bg-transparent text-foreground before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:-translate-x-[101%] before:bg-foreground before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:text-background hover:before:translate-x-0",
  ghost: "text-foreground hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: Pick<StyleProps, "variant" | "size"> & { className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

const arrowClass =
  "size-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1";

export function Button({
  variant,
  size,
  arrow = false,
  className,
  type = "button",
  children,
  ...props
}: ComponentProps<"button"> & StyleProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {children}
      {arrow ? <LuArrowRight aria-hidden="true" className={arrowClass} /> : null}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  arrow = true,
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & StyleProps) {
  return (
    <Link
      prefetch={false}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {children}
      {arrow && variant !== "ghost" ? (
        <LuArrowRight aria-hidden="true" className={arrowClass} />
      ) : null}
    </Link>
  );
}
