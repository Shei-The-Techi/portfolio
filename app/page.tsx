import Image from "next/image";

const swatches = [
  { name: "Navy", hex: "#0A1128", className: "bg-brand-navy" },
  { name: "Navy soft", hex: "#111B3A", className: "bg-brand-navy-soft" },
  { name: "Cyan", hex: "#2FD7FD", className: "bg-brand-cyan" },
  { name: "Teal", hex: "#07789A", className: "bg-brand-teal" },
  { name: "Ink", hex: "#2B3650", className: "bg-brand-ink" },
  { name: "Mist", hex: "#F4F8FB", className: "bg-brand-mist" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <Image src="/logo.png" alt="Victor Chege logo" width={120} height={120} priority />
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Victor Chege</h1>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm">
        IT Operations and Business Systems Consultant
      </p>
      <p className="max-w-xl text-lg leading-relaxed text-muted">
        I help growing businesses organise the systems they rely on, improve
        inefficient processes and carry important IT work from problem to
        verified resolution.
      </p>
      <ul className="flex flex-wrap justify-center gap-4">
        {swatches.map((s) => (
          <li key={s.name} className="flex flex-col items-center gap-2 text-xs text-muted">
            <span className={`h-12 w-12 rounded-lg border border-border ${s.className}`} />
            {s.name}
            <span className="font-mono">{s.hex}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
