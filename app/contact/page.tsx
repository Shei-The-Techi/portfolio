import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { contactCopy } from "@/lib/contact";
import { bookingUrl } from "@/lib/env";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" />
      <Section tone="light" className="pt-12 sm:pt-12">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
          {bookingUrl ? (
            <div className="mt-12 rounded-2xl border border-border bg-surface p-8">
              <p className="leading-relaxed text-muted">
                {contactCopy.booking.text}
              </p>
              <ButtonLink
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="mt-6"
              >
                {contactCopy.booking.label}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </Section>
    </>
  );
}
