export const engagements = {
  "health-check": {
    number: "01",
    title: "IT and Systems Health Check",
    text: "For a business that is unsure what it relies on, who owns it or which gaps deserve attention first.",
    receive: [
      "Findings report and prioritised action plan",
      "Ownership and dependency list",
      "Management discussion to agree what to address next",
    ],
    measures: [
      "Critical systems with an identified owner",
      "Accounts reviewed",
      "Priority actions identified",
      "Unresolved dependencies documented",
    ],
  },
  improvement: {
    number: "02",
    title: "Business Systems Improvement",
    text: "For a workflow slowed by duplicate entry, inconsistent records, manual handoffs or tools that do not match how people work.",
    receive: [
      "Workflow or requirements note",
      "Implemented configuration or coordinated change",
      "Test record",
      "User guidance and handover notes",
    ],
    measures: [
      "Manual steps",
      "Completion time",
      "Missing records",
      "Unresolved handoffs",
    ],
  },
  operations: {
    number: "03",
    title: "Fractional IT Operations and Support",
    text: "For a business where issues recur, supplier actions stall or management has no current view of open IT work.",
    receive: [
      "Systems inventory",
      "Issue and action log",
      "Records of agreed changes",
      "Periodic management snapshot",
    ],
    measures: [
      "Issue status",
      "Repeat incidents",
      "Action closure",
      "Account review coverage",
      "Critical system ownership",
    ],
  },
} as const;

export const situations = [
  { id: "recurring-issue", label: "A recurring IT issue", service: "operations" },
  { id: "system-change", label: "An upcoming system change", service: "health-check" },
  { id: "supplier-dependency", label: "An unresolved supplier dependency", service: "operations" },
  { id: "process", label: "A process that is harder to manage than it should be", service: "improvement" },
] as const;
