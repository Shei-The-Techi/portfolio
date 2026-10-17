import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return <PageHero title="Work" />;
}
