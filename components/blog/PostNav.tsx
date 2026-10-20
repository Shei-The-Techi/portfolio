import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

export function PostNav({ next }: { next: Post }) {
  return (
    <Link
      href={`/blog/${next.slug}`}
      className="group mt-16 flex items-center justify-between gap-6 rounded-xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/30"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {formatDate(next.date)}
        </p>
        <p className="mt-2 text-xl font-semibold tracking-tight">{next.title}</p>
      </div>
      <LuArrowUpRight
        aria-hidden="true"
        className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
