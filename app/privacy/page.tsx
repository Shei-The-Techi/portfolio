import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "Privacy policy" };

export default function PrivacyPage() {
  return <PageHero title="Privacy policy" />;
}
