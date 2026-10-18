export const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Clarify the business problem, affected work and the result the client needs.",
  },
  {
    number: "02",
    title: "Assess",
    text: "Review systems, access, process, available evidence and dependencies.",
  },
  {
    number: "03",
    title: "Prioritise",
    text: "Separate urgent issues from improvements and identify who needs to act.",
  },
  {
    number: "04",
    title: "Act and verify",
    text: "Complete agreed work or coordinate a specialist, then test the relevant result.",
  },
  {
    number: "05",
    title: "Document and review",
    text: "Record what changed, what remains open and what decision or follow up is needed.",
  },
] as const;

export const operatingMap = {
  label: "Map of eight business systems moving from tangled to owned and verified",
  systems: [
    "Email",
    "Cloud tools",
    "Devices",
    "Backups",
    "Access",
    "Suppliers",
    "Subscriptions",
    "Developers",
  ],
  hub: "Operating picture",
  owned: "owned",
  status: [
    "Systems: 8 · Owners known: 2",
    "Issues found: 3",
    "Priority order agreed",
    "Fixes tested and verified",
    "Systems: 8 · Owners: 8 · Open items: 0",
  ],
} as const;
