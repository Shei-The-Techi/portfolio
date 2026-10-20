import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

type ShareLinksProps = { url: string; title: string };

export function ShareLinks({ url, title }: ShareLinksProps) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      Icon: FaLinkedinIn,
    },
    {
      name: "X",
      href: `https://x.com/intent/post?text=${t}&url=${u}`,
      Icon: FaXTwitter,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      Icon: FaFacebookF,
    },
  ];

  return (
    <ul className="flex items-center gap-3">
      {links.map(({ name, href, Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${name}`}
            className="flex size-10 items-center justify-center rounded-full border border-border text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-foreground/40"
          >
            <Icon aria-hidden="true" className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
