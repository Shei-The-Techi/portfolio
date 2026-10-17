import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [...site.nav, site.cta];

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={40} height={40} />
          <div className="flex flex-col">
            <span className="font-bold tracking-tight">{site.name}</span>
            <span className="text-sm text-muted">{site.role}</span>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
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
      </Container>

      <div className="border-t border-border">
        <Container className="py-6 text-xs text-muted">
          © {year} {site.name}
        </Container>
      </div>
    </footer>
  );
}
