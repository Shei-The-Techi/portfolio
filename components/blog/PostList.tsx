"use client";

import Link from "next/link";
import { useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/cn";

type PostSummary = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  tags: string[];
  minutes: number;
};

const ALL = "All";

export function PostList({ posts }: { posts: PostSummary[] }) {
  const [tag, setTag] = useState(ALL);
  const tags = [ALL, ...Array.from(new Set(posts.flatMap((post) => post.tags)))];
  const visible = tag === ALL ? posts : posts.filter((post) => post.tags.includes(tag));

  return (
    <div>
      <ul className="flex flex-wrap gap-2" aria-label="Filter by tag">
        {tags.map((item) => (
          <li key={item}>
            <button
              type="button"
              aria-pressed={tag === item}
              onClick={() => setTag(item)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                tag === item
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border text-muted hover:text-foreground",
              )}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <ul key={tag} className="mt-10 grid gap-4 md:grid-cols-2">
        {visible.map((post, i) => (
          <li
            key={post.slug}
            style={{ animationDelay: `${i * 80}ms` }}
            className="animate-rise"
          >
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <SpotlightCard interactive className="flex h-full flex-col gap-4 p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {post.dateLabel} · {post.minutes} min read
                </p>
                <h2 className="text-2xl font-semibold leading-snug tracking-tight">
                  {post.title}
                </h2>
                <p className="leading-relaxed text-muted">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <ul className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <LuArrowUpRight
                    aria-hidden="true"
                    className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </SpotlightCard>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
