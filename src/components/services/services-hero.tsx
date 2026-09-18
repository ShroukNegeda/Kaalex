"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "../button";

export function ServicesHero() {
  const { t } = useLanguage();
  const h = t.services.hero;

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      {/* 3D Topographical Wireframe Wave Pattern */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full lg:w-[60%] opacity-40 dark:opacity-60 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full object-cover"
        >
          <defs>
            <linearGradient id="servicesMeshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.02" />
            </linearGradient>
            <radialGradient id="servicesMeshGlow" cx="60%" cy="40%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="500" cy="250" r="300" fill="url(#servicesMeshGlow)" />

          {/* Isometric / Mesh Flow Lines */}
          {Array.from({ length: 24 }).map((_, i) => {
            const yOffset = i * 22;
            const wave1 = Math.sin(i * 0.3) * 45;
            const wave2 = Math.cos(i * 0.25) * 60;
            return (
              <path
                key={i}
                d={`M 150 ${120 + yOffset} C ${300 + wave1} ${60 + yOffset + wave2}, ${520 + wave2} ${200 + yOffset - wave1}, 800 ${80 + yOffset}`}
                stroke="url(#servicesMeshGrad)"
                strokeWidth={i % 3 === 0 ? "1.5" : "0.75"}
                strokeDasharray={i % 2 === 0 ? "none" : "3 3"}
              />
            );
          })}

          {/* Cross lines for wireframe mesh effect */}
          {Array.from({ length: 18 }).map((_, j) => {
            const xPos = 200 + j * 32;
            return (
              <path
                key={`cross-${j}`}
                d={`M ${xPos} 80 Q ${xPos + 50} 280, ${xPos - 30} 580`}
                stroke="url(#servicesMeshGrad)"
                strokeWidth="0.5"
                strokeOpacity="0.5"
              />
            );
          })}
        </svg>
      </div>

      <div className="container-page relative z-10 grid min-h-[480px] items-center py-16 sm:min-h-[540px] sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {h.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-text sm:text-5xl">
            {h.titleA}{" "}
            <span className="text-accent">{h.titleHighlight}</span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            {h.desc}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Button
              href="/contact"
              size="md"
              icon={<ArrowRight size={15} />}
            >
              {t.nav.startProject}
            </Button>
          </div>

          <a
            href="#capabilities"
            className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-text-faint transition-colors hover:text-text"
          >
            {h.explore}
            <ArrowDown size={14} className="text-accent" />
          </a>
        </div>
      </div>
    </section>
  );
}
