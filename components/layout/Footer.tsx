import Image from "next/image";
import Link from "next/link";
import { BackToTop } from "@/components/layout/BackToTop";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { site } from "@/lib/site";

const heading =
  "text-xs font-semibold uppercase tracking-[0.25em] text-accent";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [...site.nav, site.cta];

  return (
    <footer
      data-tone="dark"
      className="relative overflow-hidden border-t border-border bg-background text-foreground"
    >
      <Container className="grid gap-12 pb-12 pt-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={48} height={48} />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">{site.name}</span>
              <span className="text-sm text-muted">{site.role}</span>
            </div>
          </div>
        </div>

        <nav aria-label="Footer">
          <p className={heading}>Navigate</p>
          <ul className="mt-5 space-y-3">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
                  className="group relative inline-block text-base text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={heading}>Connect</p>
          <div className="mt-5">
            <SocialLinks />
          </div>
          <div className="mt-8">
            <BackToTop />
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        data-text={site.name}
        className="pointer-events-none select-none whitespace-nowrap text-center text-[clamp(3.5rem,15vw,14rem)] font-bold leading-[0.8] tracking-tighter text-foreground/[0.05] before:content-[attr(data-text)]"
      />

      <div className="relative border-t border-border bg-background">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted md:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {site.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  prefetch={false}
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
