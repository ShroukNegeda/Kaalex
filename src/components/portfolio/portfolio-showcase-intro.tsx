"use client";

import { useLanguage } from "@/context/language-context";

export function PortfolioShowcaseIntro() {
  const { t } = useLanguage();
  const s = t.portfolio.showcase;

  return (
    <section id="showcase" className="border-b border-border bg-bg py-16 sm:py-20">
      <div className="container-page">
        <div className="max-w-4xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {s.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            {s.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
