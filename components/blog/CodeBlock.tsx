"use client";

import { type ComponentProps, useRef, useState } from "react";

export function CodeBlock({ children, ...props }: ComponentProps<"pre">) {
  const ref = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const text = ref.current?.innerText ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="relative my-8">
      <button
        type="button"
        onClick={copy}
        className="absolute right-3 top-3 rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-brand-offwhite transition-colors hover:bg-white/15"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <pre
        ref={ref}
        {...props}
        className="overflow-x-auto rounded-xl border border-border bg-brand-navy p-5 pr-20 font-mono text-sm leading-relaxed text-brand-offwhite [&_code]:bg-transparent [&_code]:p-0"
      >
        {children}
      </pre>
    </div>
  );
}
