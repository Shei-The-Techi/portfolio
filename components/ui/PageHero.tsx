import { Container } from "@/components/ui/Container";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { SectionHeading } from "@/components/ui/Section";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  image?: string | null;
};

export function PageHero({ title, eyebrow, image }: PageHeroProps) {
  return (
    <section
      data-tone="dark"
      className="relative isolate overflow-hidden bg-background pb-20 pt-36 text-foreground sm:pb-28 sm:pt-44"
    >
      <HeroBackground image={image} />
      <Container className="animate-rise">
        <SectionHeading as="h1" eyebrow={eyebrow} title={title} />
      </Container>
    </section>
  );
}
