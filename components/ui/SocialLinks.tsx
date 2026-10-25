import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { site } from "@/lib/site";

const icons = {
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
};

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {site.socials.map(({ name, href }) => {
        const Icon = icons[name];
        return (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${site.name} on ${name}`}
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_12px_24px_-10px_var(--primary)]"
            >
              <Icon aria-hidden="true" className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
