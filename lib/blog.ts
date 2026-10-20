import fs from "node:fs";
import path from "node:path";

export type PostMeta = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  draft?: boolean;
};

export type Post = PostMeta & { slug: string; minutes: number };

const directory = path.join(process.cwd(), "content", "blog");

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}

export async function getPosts(): Promise<Post[]> {
  const files = fs.readdirSync(directory).filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { meta } = (await import(`@/content/blog/${slug}.mdx`)) as {
        meta: PostMeta;
      };
      const raw = fs.readFileSync(path.join(directory, file), "utf8");
      const body = raw.replace(/^export const meta = \{[\s\S]*?^\};\s*$/m, "");
      const words = body.split(/\s+/).filter(Boolean).length;
      return { slug, ...meta, minutes: Math.max(1, Math.round(words / 200)) };
    }),
  );

  return posts
    .filter((post) => process.env.NODE_ENV !== "production" || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}
