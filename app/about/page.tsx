import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return <PageHero title="About" />;
}
