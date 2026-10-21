import { getPosts } from "@/lib/blog";
import { ogImage } from "@/lib/og";
import { site } from "@/lib/site";

export const alt = "Blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (await getPosts()).find((item) => item.slug === slug);
  return ogImage({ title: post?.title ?? site.name, eyebrow: site.links.blog.label });
}
