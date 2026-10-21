import { ogImage } from "@/lib/og";
import { site } from "@/lib/site";
import { caseStudies } from "@/lib/work";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return ogImage({ title: study?.title ?? site.name, eyebrow: study?.category });
}
