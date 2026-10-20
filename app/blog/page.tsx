import type { Metadata } from "next";
import { PostList } from "@/components/blog/PostList";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { formatDate, getPosts } from "@/lib/blog";

export const metadata: Metadata = { title: "Blog" };

export default async function BlogPage() {
  const posts = await getPosts();
  const summaries = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    dateLabel: formatDate(post.date),
    excerpt: post.excerpt,
    tags: post.tags,
    minutes: post.minutes,
  }));

  return (
    <>
      <PageHero title="Blog" />
      <Section tone="light" className="pt-12 sm:pt-12">
        <PostList posts={summaries} />
      </Section>
    </>
  );
}
