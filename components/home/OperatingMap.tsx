"use client";

import { type MotionValue, useAnimationFrame, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { operatingMap } from "@/lib/story";

const NAVY = "#0a1128";
const CYAN = "#2fd7fd";
const AMBER = "#f5a524";
const GREY = "#5f6877";
const OFFWHITE = "#f6f7f9";
const CENTER = 250;

const MESSY = [
  [110, 90],
  [360, 70],
  [60, 300],
  [400, 380],
  [230, 440],
  [440, 200],
  [170, 230],
  [320, 260],
] as const;

const RING = operatingMap.systems.map((_, i) => {
  const angle = -Math.PI / 2 + (i * Math.PI) / 4;
  return [CENTER + 180 * Math.cos(angle), CENTER + 180 * Math.sin(angle)] as const;
});

const ISSUES: Record<number, number> = { 4: 1, 3: 2, 5: 3 };

const CROSS = [
  [0, 1],
  [1, 4],
  [2, 6],
  [3, 7],
  [5, 7],
  [0, 6],
] as const;

type Cache = {
  nodes: SVGGElement[];
  circles: SVGCircleElement[];
  marks: SVGTextElement[];
  labels: SVGTextElement[];
  owned: SVGTextElement[];
  spokes: SVGLineElement[];
  cross: SVGLineElement[];
  hub: SVGTextElement | null;
  keys: string[];
  hubOn: boolean;
};

const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));
const ease = (x: number) => x * x * (3 - 2 * x);

function draw(c: Cache, progress: number, time: number) {
  const sf = clamp(progress) * 4;
  const t = ease(clamp((sf - 2.6) / 0.9));
  const wobble = (1 - t) * 5;

  const pos = RING.map((ring, i) => {
    const x =
      MESSY[i][0] * (1 - t) + ring[0] * t + Math.sin(time * 0.9 + i * 1.7) * wobble;
    const y =
      MESSY[i][1] * (1 - t) + ring[1] * t + Math.cos(time * 0.8 + i * 2.3) * wobble;
    return [x, y] as const;
  });

  pos.forEach(([x, y], i) => {
    c.nodes[i].setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    c.spokes[i].setAttribute("x2", x.toFixed(1));
    c.spokes[i].setAttribute("y2", y.toFixed(1));

    const issue = ISSUES[i];
    const verified = sf >= 3.1 + i * 0.06;
    let look = "idle";
    if (verified) look = "verified";
    else if (issue && sf >= 2) look = "priority";
    else if (issue && sf >= 1) look = "issue";
    else if (sf >= 2) look = "dim";

    const key = `${look}|${sf < 0.5 ? 0 : 1}|${sf >= 3.7 ? 1 : 0}`;
    if (key === c.keys[i]) return;
    c.keys[i] = key;

    const fill =
      look === "verified" ? CYAN : look === "issue" || look === "priority" ? AMBER : NAVY;
    const stroke = look === "idle" || look === "dim" ? GREY : fill;
    const mark =
      look === "verified" ? "✓" : look === "issue" ? "!" : look === "priority" ? String(issue) : "";
    const dim = look === "dim" ? 0.45 : 1;

    c.circles[i].style.fill = fill;
    c.circles[i].style.stroke = stroke;
    c.circles[i].style.opacity = String(dim);
    c.marks[i].textContent = mark;
    c.labels[i].style.opacity = String(sf < 0.5 ? 0.5 : dim);
    c.owned[i].style.opacity = sf >= 3.7 ? "1" : "0";
    c.spokes[i].style.stroke = look === "verified" ? "rgba(47,215,253,0.55)" : GREY;
  });

  CROSS.forEach(([a, b], k) => {
    const line = c.cross[k];
    line.setAttribute("x1", pos[a][0].toFixed(1));
    line.setAttribute("y1", pos[a][1].toFixed(1));
    line.setAttribute("x2", pos[b][0].toFixed(1));
    line.setAttribute("y2", pos[b][1].toFixed(1));
    line.style.opacity = String(Math.max(0, 1 - t * 1.6));
  });

  const hubOn = sf >= 3;
  if (hubOn !== c.hubOn) {
    c.hubOn = hubOn;
    c.hub?.style.setProperty("opacity", hubOn ? "1" : "0");
  }
}

type OperatingMapProps = {
  progress: MotionValue<number>;
  staticFinal?: boolean;
};

export function OperatingMap({ progress, staticFinal = false }: OperatingMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const cache = useRef<Cache | null>(null);
  const inView = useInView(svgRef);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const all = <T extends Element>(selector: string) =>
      Array.from(svg.querySelectorAll<T>(selector));
    cache.current = {
      nodes: all<SVGGElement>("[data-node]"),
      circles: all<SVGCircleElement>("[data-circle]"),
      marks: all<SVGTextElement>("[data-mark]"),
      labels: all<SVGTextElement>("[data-label]"),
      owned: all<SVGTextElement>("[data-owned]"),
      spokes: all<SVGLineElement>("[data-spoke]"),
      cross: all<SVGLineElement>("[data-cross]"),
      hub: svg.querySelector<SVGTextElement>("[data-hub]"),
      keys: [],
      hubOn: false,
    };
    draw(cache.current, staticFinal ? 1 : progress.get(), 0);
  }, [progress, staticFinal]);

  useAnimationFrame((time) => {
    const c = cache.current;
    if (!c || staticFinal || !inView) return;
    draw(c, progress.get(), time / 1000);
  });

  const fade = { transition: "opacity 0.5s" };

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 500"
      role="img"
      aria-label={operatingMap.label}
      className="h-full w-full"
    >
      {CROSS.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          data-cross
          x1={MESSY[a][0]}
          y1={MESSY[a][1]}
          x2={MESSY[b][0]}
          y2={MESSY[b][1]}
          stroke={GREY}
          strokeWidth={1}
        />
      ))}
      {MESSY.map(([x, y], i) => (
        <line
          key={`spoke-${i}`}
          data-spoke
          x1={CENTER}
          y1={CENTER}
          x2={x}
          y2={y}
          stroke={GREY}
          strokeWidth={1}
          style={{ transition: "stroke 0.5s" }}
        />
      ))}
      <circle cx={CENTER} cy={CENTER} r={18} fill={NAVY} stroke={CYAN} strokeWidth={1.5} />
      <text
        data-hub
        x={CENTER}
        y={CENTER + 44}
        textAnchor="middle"
        fontSize={14}
        fill={CYAN}
        style={{ ...fade, opacity: 0 }}
      >
        {operatingMap.hub}
      </text>
      {operatingMap.systems.map((name, i) => (
        <g key={name} data-node transform={`translate(${MESSY[i][0]} ${MESSY[i][1]})`}>
          <circle
            data-circle
            r={11}
            fill={NAVY}
            stroke={GREY}
            strokeWidth={1.5}
            style={{ transition: "fill 0.5s, stroke 0.5s, opacity 0.5s" }}
          />
          <text data-mark y={5} textAnchor="middle" fontSize={14} fontWeight={500} fill={NAVY} />
          <text
            data-label
            y={32}
            textAnchor="middle"
            fontSize={16}
            fill={OFFWHITE}
            style={{ ...fade, opacity: 0.5 }}
          >
            {name}
          </text>
          <text
            data-owned
            y={50}
            textAnchor="middle"
            fontSize={13}
            fill={CYAN}
            style={{ ...fade, opacity: 0 }}
          >
            {operatingMap.owned}
          </text>
        </g>
      ))}
    </svg>
  );
}
