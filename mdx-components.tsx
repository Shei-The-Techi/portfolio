import type { MDXComponents } from "mdx/types";
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
    p: ({ children }) => (
      <p className="text-lg leading-relaxed text-muted">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    ...components,
  };
}
