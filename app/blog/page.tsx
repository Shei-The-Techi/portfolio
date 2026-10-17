import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return <PageHero title="Blog" />;
}
