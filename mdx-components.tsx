import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/blog/CodeBlock";
import { CaseSection } from "@/components/work/CaseSection";
import { FlowDiagram } from "@/components/work/FlowDiagram";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Problem: ({ children }) => (
      <CaseSection number="01" label="Problem">
        {children}
      </CaseSection>
    ),
    Solution: ({ children }) => (
      <CaseSection number="02" label="Solution">
        {children}
      </CaseSection>
    ),
    Impact: ({ children }) => (
      <CaseSection number="03" label="Impact">
        {children}
      </CaseSection>
    ),
    FlowDiagram,
    h2: ({ children }) => (
      <h2 className="mt-14 text-2xl font-bold tracking-tight sm:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 text-xl font-semibold tracking-tight">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-lg leading-relaxed text-muted">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="font-medium text-accent underline underline-offset-4 hover:text-foreground"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc space-y-2 pl-6 text-lg leading-relaxed text-muted marker:text-brand-cyan">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal space-y-2 pl-6 text-lg leading-relaxed text-muted marker:text-accent">
        {children}
      </ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-cyan pl-6 text-xl italic text-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code
        {...props}
        className="rounded bg-border/60 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
      >
        {children}
      </code>
    ),
    pre: CodeBlock,
    ...components,
  };
}
