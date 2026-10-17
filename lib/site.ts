const links = {
  about: { label: "About", href: "/about" },
  work: { label: "Work", href: "/work" },
  pricing: { label: "Pricing", href: "/pricing" },
  blog: { label: "Blog", href: "/blog" },
  contact: { label: "Contact", href: "/contact" },
} as const;

export const site = {
  name: "Victor Chege",
  legalName: "Victor Chege",
  role: "IT Operations and Business Systems Consultant",
  links,
  nav: [links.about, links.work, links.pricing, links.blog],
  cta: links.contact,
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com" },
    { name: "X", href: "https://x.com" },
    { name: "Instagram", href: "https://www.instagram.com" },
    { name: "Facebook", href: "https://www.facebook.com" },
  ],
  legal: [
    { label: "Terms and conditions", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
  ],
  heroImage: null as string | null,
} as const;
