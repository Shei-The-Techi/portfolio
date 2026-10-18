export const home = {
  hero: {
    text: "I help growing businesses organise the systems they rely on, improve inefficient processes and carry important IT work from problem to verified resolution.",
  },
  work: {
    eyebrow: "Proof of work",
    title: "Relevant work in real operating environments.",
  },
  about: {
    eyebrow: "Where I fit",
    title:
      "Practical IT ownership for businesses between informal support and a full time IT manager.",
    points: [
      {
        title: "Hands on execution",
        text: "I troubleshoot, configure, test and support agreed changes.",
      },
      {
        title: "Clear ownership",
        text: "Issues, decisions, dependencies and next actions stay visible.",
      },
      {
        title: "Follow through",
        text: "Work is checked and documented, not just passed to the next supplier.",
      },
    ],
  },
  services: {
    eyebrow: "Services and engagement",
    title: "Start with the problem. Leave with a clear next step.",
    health: {
      number: "01",
      title: "IT and Systems Health Check",
      text: "For a business that is unsure what it relies on, who owns it or which gaps deserve attention first.",
      review: [
        "Agreed systems, accounts and key owners",
        "Access and permissions, supplier dependencies and subscriptions",
        "Available documentation, devices or platforms, and current backup arrangements",
      ],
    },
    improvement: {
      number: "02",
      title: "Business Systems Improvement",
      text: "For a workflow slowed by duplicate entry, inconsistent records, manual handoffs or tools that do not match how people work.",
    },
    operations: {
      number: "03",
      title: "Fractional IT Operations and Support",
      text: "For a business where issues recur, supplier actions stall or management has no current view of open IT work.",
      log: ["Systems inventory", "Issue and action log", "Records of agreed changes"],
    },
    measures: {
      title: "Success measures",
      items: [
        "Critical systems with an identified owner",
        "Accounts reviewed",
        "Priority actions identified",
        "Unresolved dependencies documented",
      ],
    },
  },
  cta: {
    eyebrow: "A sensible place to begin",
    text: "Bring one recurring IT issue, an upcoming system change, an unresolved supplier dependency or a process that is harder to manage than it should be.",
  },
} as const;
