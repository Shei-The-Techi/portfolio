import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/env";
import { caseStudies } from "@/lib/work";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const now = new Date();

  const pages = ["", "/about", "/work", "/pricing", "/blog", "/contact", "/terms", "/privacy"].map(
    (path) => ({ url: `${siteUrl}${path}`, lastModified: now }),
  );
  const cases = caseStudies.map((study) => ({
    url: `${siteUrl}/work/${study.slug}`,
    lastModified: now,
  }));
  const articles = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...pages, ...cases, ...articles];
}
