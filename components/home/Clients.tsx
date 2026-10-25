import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { clients } from "@/lib/home";

export function Clients() {
  return (
    <Section tone="sand">
      <Reveal>
        <SectionHeading
          eyebrow={clients.eyebrow}
          title={clients.title}
          className="max-w-3xl"
        />
      </Reveal>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {clients.items.map((client, index) => (
          <li key={client.name}>
            <Reveal delay={index * 0.08} className="h-full">
              <Link
                href={`/work/${client.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_40px_-24px_rgb(10_17_40/0.45)] focus-visible:-translate-y-1.5"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-amber transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="flex size-14 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-brand-offwhite transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-brand-amber group-hover:text-brand-navy group-focus-visible:rotate-[360deg] group-focus-visible:bg-brand-amber group-focus-visible:text-brand-navy"
                >
                  {client.initials}
                </span>
                <span className="mt-6 text-xl font-semibold leading-snug tracking-tight">
                  {client.name}
                </span>
                <span className="mt-1 text-sm text-muted">{client.category}</span>
                <span className="mt-4 grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <span className="overflow-hidden">
                    <span className="block border-t border-border pt-4 text-sm text-muted">
                      {client.period}
                    </span>
                  </span>
                </span>
                <LuArrowUpRight
                  aria-hidden="true"
                  className="absolute right-5 top-5 size-5 -translate-x-2 translate-y-2 text-foreground opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
