import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { CtaBand } from "@/components/home/CtaBand";
import { PostNav } from "@/components/blog/PostNav";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ShareLinks } from "@/components/blog/ShareLinks";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { formatDate, getPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/env";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getPosts()).find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getPosts();
  const index = posts.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const post = posts[index];
  const next = posts.length > 1 ? posts[(index + 1) % posts.length] : null;
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <>
      <ReadingProgress />
      <PageHero
        title={post.title}
        eyebrow={`${formatDate(post.date)} · ${post.minutes} min read`}
      />

      <Section tone="light">
        <div className="mx-auto max-w-3xl">
          <Link
            href={site.links.blog.href}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <LuArrowLeft aria-hidden="true" className="size-4" />
            {site.links.blog.label}
          </Link>

          <article className="mt-10 space-y-6">
            <Content />
          </article>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
            <ul className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <ShareLinks url={`${siteUrl}/blog/${slug}`} title={post.title} />
          </div>

          {next ? <PostNav next={next} /> : null}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
