export const caseStudies = [
  {
    slug: "ck-marketing-coaching",
    title: "CK Marketing Coaching",
    category: "IT consulting",
    period: "March to August 2026",
    outputs: ["Six monthly reporting cycles", "Platform comparison brief"],
    relevance:
      "Shows how hands on support and supplier coordination can be paired with reporting that helps management see what is complete and what still needs action.",
  },
  {
    slug: "avlc-group-and-bt-concepts",
    title: "AVLC Group and BT Concepts",
    category: "IT support and administration",
    period: "December 2019 to August 2025",
    outputs: ["Documented procedures", "Windows and macOS support"],
    relevance:
      "Documentation and routine administration make IT support easier to repeat and hand over when people or responsibilities change.",
  },
  {
    slug: "adapo-startup-mvp",
    title: "Adapo startup MVP",
    category: "Project coordination and front end support",
    period: "July 2024 to September 2025",
    outputs: ["Front end changes", "Interface testing"],
    relevance:
      "Shows a practical mix of implementation and coordination while keeping technical responsibility clearly defined.",
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];
