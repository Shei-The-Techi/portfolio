export const hero = {
  tagline:
    "I help growing businesses organise the systems they rely on, improve inefficient processes and carry important IT work from problem to verified resolution.",
  chips: ["6+ years hands on IT", "SMEs and growing teams", "Windows and macOS"],
} as const;

export const who = {
  eyebrow: "Where I fit",
  title: "Practical IT ownership for businesses between informal support and a full time IT manager.",
  text: "I work best with founder led SMEs and growing teams that depend on several cloud platforms, external developers or service providers, but do not yet have a dedicated person responsible for the whole operating picture.",
  sectors: ["Professional services", "Consulting", "Training", "Digital first businesses"],
} as const;

export const servicesIntro = {
  eyebrow: "Services and engagement",
  title: "Start with the problem. Leave with a clear next step.",
  prompt: "Where are you starting?",
  labels: {
    situation: "Your situation",
    start: "Where we start",
    change: "What changes",
    receive: "What you receive",
    measure: "How it is measured",
  },
} as const;

export const clients = {
  eyebrow: "Proof of work",
  title: "Relevant work in real operating environments.",
  items: [
    {
      name: "CK Marketing Coaching",
      initials: "CK",
      category: "IT consulting",
      period: "March to August 2026",
      slug: "ck-marketing-coaching",
    },
    {
      name: "AVLC Group",
      initials: "AV",
      category: "IT support and administration",
      period: "December 2019 to August 2025",
      slug: "avlc-group-and-bt-concepts",
    },
    {
      name: "BT Concepts",
      initials: "BT",
      category: "IT support and administration",
      period: "December 2019 to August 2025",
      slug: "avlc-group-and-bt-concepts",
    },
    {
      name: "Adapo",
      initials: "AD",
      category: "Project coordination and front end support",
      period: "July 2024 to September 2025",
      slug: "adapo-startup-mvp",
    },
  ],
} as const;

export const cta = {
  eyebrow: "A sensible place to begin",
  text: "Bring one recurring IT issue or a process that is harder to manage than it should be.",
} as const;
