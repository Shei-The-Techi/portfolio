import { Clients } from "@/components/home/Clients";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { ServicesExplorer } from "@/components/home/ServicesExplorer";
import { WhoIAm } from "@/components/home/WhoIAm";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { servicesIntro } from "@/lib/home";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoIAm />

      <Section tone="light" id="services" className="scroll-mt-16">
        <Reveal>
          <SectionHeading
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            className="max-w-3xl"
          />
        </Reveal>
        <ServicesExplorer />
      </Section>

      <Clients />
      <CtaBand />
    </>
  );
}
