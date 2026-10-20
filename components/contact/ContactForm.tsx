"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";
import type { FormEvent } from "react";
import { submitContact } from "@/app/contact/actions";
import { Field, inputClass } from "@/components/contact/Field";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import {
  type FieldErrors,
  type FieldName,
  contactCopy,
  contactSchema,
  services,
  topics,
} from "@/lib/contact";
import { site } from "@/lib/site";

const stepFields: FieldName[][] = [
  ["name", "email", "company"],
  ["topic", "service"],
  ["message", "consent"],
];

const { labels, buttons } = contactCopy;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const startedAt = useRef(0);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [notice, setNotice] = useState("");
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const collect = () => {
    const form = formRef.current;
    return form ? Object.fromEntries(new FormData(form)) : {};
  };

  const validateStep = (index: number) => {
    const fields = stepFields[index];
    const result = contactSchema.safeParse(collect());
    const found: FieldErrors = {};
    if (!result.success) {
      for (const issue of result.error.issues) {
        const key = issue.path[0] as FieldName;
        if (fields.includes(key) && !found[key]) found[key] = issue.message;
      }
    }
    setErrors((current) => {
      const next = { ...current };
      for (const key of fields) delete next[key];
      return { ...next, ...found };
    });
    const first = fields.find((key) => found[key]);
    if (first) {
      const element = formRef.current?.elements.namedItem(first);
      if (element instanceof HTMLElement) element.focus();
      else if (element instanceof RadioNodeList && element[0] instanceof HTMLElement) {
        element[0].focus();
      }
      return false;
    }
    return true;
  };

  const goNext = () => {
    if (validateStep(step)) setStep(step + 1);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 2) {
      goNext();
      return;
    }
    if (!validateStep(2)) return;

    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    data.set("startedAt", String(startedAt.current));

    startTransition(async () => {
      const result = await submitContact(data);
      if (result.ok) {
        setStatus("sent");
        return;
      }
      if (result.errors) {
        setErrors(result.errors);
        const firstStep = stepFields.findIndex((fields) =>
          fields.some((key) => result.errors?.[key]),
        );
        if (firstStep >= 0) setStep(firstStep);
      }
      setNotice(result.message ?? contactCopy.failure);
      setStatus("error");
    });
  };

  if (status === "sent") {
    return (
      <div className="animate-rise rounded-2xl border border-border bg-surface p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {contactCopy.success.title}
        </p>
        <p className="mt-4 text-xl leading-relaxed">{contactCopy.success.text}</p>
      </div>
    );
  }

  const privacy = site.legal[1];

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-surface p-6 sm:p-10"
    >
      <ol className="mb-10 grid grid-cols-3 gap-3">
        {contactCopy.steps.map((title, index) => (
          <li key={title}>
            <div
              className={cn(
                "h-1 rounded-full transition-colors duration-500",
                index <= step ? "bg-brand-cyan" : "bg-border",
              )}
            />
            <p
              className={cn(
                "mt-2 text-xs font-semibold tracking-[0.15em]",
                index === step ? "text-foreground" : "text-muted",
              )}
              aria-current={index === step ? "step" : undefined}
            >
              {String(index + 1).padStart(2, "0")} {title}
            </p>
          </li>
        ))}
      </ol>

      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={cn("space-y-6", step === 0 ? "animate-rise" : "hidden")}>
        <Field id="name" label={labels.name} error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="email" label={labels.email} error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={120}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field id="company" label={labels.company} error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={100}
            className={inputClass}
          />
        </Field>
      </div>

      <div className={cn("space-y-6", step === 1 ? "animate-rise" : "hidden")}>
        <fieldset>
          <legend className="mb-3 block text-sm font-semibold">{labels.topic}</legend>
          <div className="grid gap-3">
            {topics.map((topic) => (
              <label
                key={topic.value}
                className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background px-4 py-4 transition-colors has-checked:border-brand-cyan has-checked:bg-brand-cyan/10 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary"
              >
                <input
                  type="radio"
                  name="topic"
                  value={topic.value}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="size-4 shrink-0 rounded-full border border-muted transition-colors peer-checked:border-brand-cyan peer-checked:bg-brand-cyan"
                />
                <span>{topic.label}</span>
              </label>
            ))}
          </div>
          {errors.topic ? (
            <p role="alert" className="mt-2 text-sm text-red-600">
              {errors.topic}
            </p>
          ) : null}
        </fieldset>
        <Field id="service" label={labels.service} error={errors.service}>
          <select
            id="service"
            name="service"
            defaultValue="not-sure"
            className={inputClass}
          >
            {services.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className={cn("space-y-6", step === 2 ? "animate-rise" : "hidden")}>
        <Field id="message" label={labels.message} error={errors.message}>
          <textarea
            id="message"
            name="message"
            rows={6}
            maxLength={2000}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={inputClass}
          />
        </Field>
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              className="mt-1 size-4 accent-[#07789a]"
              aria-invalid={Boolean(errors.consent)}
            />
            <span className="text-sm leading-relaxed text-muted">
              {labels.consent}{" "}
              <Link
                href={privacy.href}
                className="font-medium text-accent underline underline-offset-4"
              >
                {privacy.label}
              </Link>
              .
            </span>
          </label>
          {errors.consent ? (
            <p role="alert" className="mt-2 text-sm text-red-600">
              {errors.consent}
            </p>
          ) : null}
        </div>
      </div>

      {status === "error" && notice ? (
        <p role="alert" className="mt-6 rounded-lg border border-red-500/40 bg-red-500/5 p-4 text-sm text-red-700">
          {notice}
        </p>
      ) : null}

      <div className="mt-10 flex items-center justify-between gap-4">
        {step > 0 ? (
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setStep(step - 1)}
            disabled={pending}
          >
            {buttons.back}
          </Button>
        ) : (
          <span />
        )}
        {step < 2 ? (
          <Button size="lg" onClick={goNext}>
            {buttons.next}
          </Button>
        ) : (
          <Button type="submit" size="lg" disabled={pending}>
            {pending ? buttons.sending : buttons.send}
          </Button>
        )}
      </div>
    </form>
  );
}
