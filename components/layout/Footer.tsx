import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [...site.nav, site.cta];

  return (
    <footer
      data-tone="dark"
      className="border-t border-border bg-background text-foreground"
    >
      <Container className="flex flex-col items-center gap-10 py-14 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3 text-left">
          <Image src="/logo.png" alt="" width={40} height={40} />
          <div className="flex flex-col">
            <span className="font-bold tracking-tight">{site.name}</span>
            <span className="text-sm text-muted">{site.role}</span>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted md:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {site.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
