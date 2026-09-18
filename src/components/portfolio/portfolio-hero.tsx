"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "../button";

export function PortfolioHero() {
  const { t } = useLanguage();
  const h = t.portfolio.hero;

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg">
      {/* Perspective Architectural Wireframe Grid Graphic */}
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
            <linearGradient id="portfolioGridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
              <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.02" />
            </linearGradient>
            <radialGradient id="portfolioGridGlow" cx="65%" cy="35%" r="55%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="520" cy="220" r="280" fill="url(#portfolioGridGlow)" />

          {/* Perspective Vanishing Lines radiating from upper center */}
          {Array.from({ length: 14 }).map((_, i) => {
            const angleX = 200 + i * 50;
            return (
              <line
                key={`rad-${i}`}
                x1="480"
                y1="80"
                x2={angleX}
                y2="580"
                stroke="url(#portfolioGridGrad)"
                strokeWidth="0.8"
                strokeOpacity="0.7"
              />
            );
          })}

          {/* Horizontal Transverse Lines creating perspective depth grid */}
          {[120, 160, 210, 270, 340, 420, 510].map((y, idx) => (
            <line
              key={`horiz-${idx}`}
              x1="220"
              y1={y}
              x2="780"
              y2={y}
              stroke="url(#portfolioGridGrad)"
              strokeWidth="0.8"
              strokeOpacity="0.6"
            />
          ))}

          {/* Diagonal Architectural Geometry */}
          <polygon
            points="480,80 320,340 640,340"
            stroke="url(#portfolioGridGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            fill="none"
          />
          <polygon
            points="480,80 240,510 720,510"
            stroke="url(#portfolioGridGrad)"
            strokeWidth="0.8"
            fill="none"
          />
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
            href="#showcase"
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
