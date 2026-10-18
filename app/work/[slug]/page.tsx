import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { CtaBand } from "@/components/home/CtaBand";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CaseNav } from "@/components/work/CaseNav";
import { caseStudies } from "@/lib/work";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.relevance };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  const { default: Content } = await import(`@/content/work/${slug}.mdx`);

  return (
    <>
      <PageHero title={study.title} eyebrow={study.category} />

      <Section tone="light">
        <div className="grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Link
              href={site.links.work.href}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <LuArrowLeft aria-hidden="true" className="size-4" />
              {site.links.work.label}
            </Link>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Category
                </dt>
                <dd className="mt-1">{study.category}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Period
                </dt>
                <dd className="mt-1">{study.period}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Outputs
                </dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-2">
                    {study.outputs.map((output) => (
                      <li
                        key={output}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {output}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </aside>

          <article className="min-w-0 space-y-16">
            <Content />
            <div
              data-tone="dark"
              className="rounded-xl bg-background p-8 text-foreground"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Business relevance
              </p>
              <p className="mt-3 text-xl leading-relaxed">{study.relevance}</p>
            </div>
          </article>
        </div>

        <CaseNav slug={slug} />
      </Section>

      <CtaBand />
    </>
  );
}
