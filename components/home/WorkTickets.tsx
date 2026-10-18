import Link from "next/link";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { home } from "@/lib/content";
import { site } from "@/lib/site";

export function WorkTickets() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-3">
      {home.work.items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.08} className="h-full">
          <Link href={site.links.work.href} className="group block h-full">
            <SpotlightCard interactive className="flex h-full flex-col gap-5">
              <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent md:min-h-8">
                <span
                  aria-hidden="true"
                  className="mt-1 size-2 shrink-0 rounded-full bg-brand-cyan"
                />
                {item.category}
              </div>
              <h3 className="text-xl font-semibold tracking-tight">
                {item.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {item.outputs.map((output) => (
                  <li
                    key={output}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    <LuCheck aria-hidden="true" className="size-3 text-accent" />
                    {output}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm text-muted">
                <span>{item.period}</span>
                <LuArrowUpRight
                  aria-hidden="true"
                  className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
            </SpotlightCard>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
