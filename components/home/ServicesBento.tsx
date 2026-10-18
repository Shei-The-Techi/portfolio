import { Checklist, Converge, StatusLog } from "@/components/home/visuals";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { home } from "@/lib/content";

const { health, improvement, operations, measures } = home.services;

export function ServicesBento() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-6">
      <Reveal className="h-full md:col-span-4">
        <SpotlightCard className="h-full p-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent">
            {health.number}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            {health.title}
          </h3>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            {health.text}
          </p>
          <Checklist items={health.review} />
        </SpotlightCard>
      </Reveal>

      <Reveal delay={0.08} className="h-full md:col-span-2">
        <div
          data-tone="dark"
          className="h-full rounded-xl bg-background p-8 text-foreground"
        >
          <h3 className="text-xl font-semibold tracking-tight">
            {measures.title}
          </h3>
          <Checklist items={measures.items} />
        </div>
      </Reveal>

      <Reveal delay={0.04} className="h-full md:col-span-3">
        <SpotlightCard className="h-full p-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent">
            {improvement.number}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            {improvement.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{improvement.text}</p>
          <Converge />
        </SpotlightCard>
      </Reveal>

      <Reveal delay={0.12} className="h-full md:col-span-3">
        <SpotlightCard className="h-full p-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent">
            {operations.number}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight">
            {operations.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">{operations.text}</p>
          <StatusLog items={operations.log} />
        </SpotlightCard>
      </Reveal>
    </div>
  );
}
