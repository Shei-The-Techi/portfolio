export const about = {
  problem: {
    eyebrow: "The business problem",
    title: "Technology can grow faster than the way it is managed.",
    text: "As teams grow, tools get added, suppliers own different parts of the environment and workarounds become routine. Staff may not know which system holds the current information, who can approve a change or whether an external provider has finished a task. The result is often lost time, unclear accountability and decisions made without a complete picture.",
    cards: [
      {
        title: "Recurring issues",
        text: "The same faults return because the cause, fix or procedure is not clearly recorded.",
      },
      {
        title: "Unclear ownership",
        text: "Access, subscriptions, system decisions or supplier actions fall between people.",
      },
      {
        title: "Manual workarounds",
        text: "Duplicated entry and informal handoffs make work harder to track and maintain.",
      },
    ],
  },
  trajectory: {
    eyebrow: "Trajectory",
    title: "More than six years of hands on IT support and administration.",
    start: [2019, 12],
    end: [2026, 9],
    items: [
      { slug: "avlc-group-and-bt-concepts", from: [2019, 12], to: [2025, 8] },
      { slug: "adapo-startup-mvp", from: [2024, 7], to: [2025, 9] },
      { slug: "ck-marketing-coaching", from: [2026, 3], to: [2026, 8] },
    ],
  },
  philosophy: [
    "Simplify first, automate second. I look for a clearer process and better use of existing tools before recommending automation or new software.",
    "The aim is not to add more technology. It is to make the technology already in use easier to understand, support and manage.",
  ],
  scope: {
    eyebrow: "Scope and specialist support",
    own: {
      label: "Work I can own within agreed scope",
      items: [
        "IT troubleshooting and systems administration",
        "Cloud productivity tools, accounts and permissions",
        "Routine access reviews, MFA settings and approved account access changes",
        "Platform readiness, configuration, testing and handover",
        "Documentation, issue tracking and management reporting",
      ],
    },
    specialist: {
      label: "Work that may need a specialist",
      items: [
        "Penetration testing and specialist security assessments",
        "Digital forensics, SOC operations or advanced threat hunting",
        "Formal compliance certification or legal advice",
        "Complex integrations, specialist automation or custom application engineering",
        "24/7 enterprise support without a separately staffed arrangement",
      ],
    },
    environments: ["Windows", "macOS", "HTML", "CSS", "JavaScript"],
    note: "Operational security is part of disciplined IT management. I can help with agreed access, MFA, permission and routine update practices. This does not replace specialist testing or formal compliance work.",
  },
} as const;
