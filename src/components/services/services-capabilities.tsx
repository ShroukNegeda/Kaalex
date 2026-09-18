"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";
import { useLanguage } from "@/context/language-context";

type TabKey = "tech" | "brand" | "growth";

export function ServicesCapabilities() {
  const { t } = useLanguage();
  const c = t.services.capabilities;
  const [activeTab, setActiveTab] = useState<TabKey>("tech");

  const activeContent = c.items[activeTab];

  return (
    <section id="capabilities" className="border-b border-border bg-bg py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-muted">
            {c.desc}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {(["tech", "brand", "growth"] as const).map((tabKey) => (
            <button
              key={tabKey}
              type="button"
              onClick={() => setActiveTab(tabKey)}
              className={clsx(
                "rounded-full px-5 py-2 text-xs font-semibold transition-colors duration-150 sm:text-sm",
                activeTab === tabKey
                  ? "bg-accent text-accent-contrast shadow-sm"
                  : "border border-border bg-surface text-text-muted hover:border-text-faint hover:text-text"
              )}
            >
              {c.tabs[tabKey]}
            </button>
          ))}
        </div>

        {/* Cards Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Main Feature Card (Left) */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 sm:p-9">
            <div>
              <span className="text-xs font-mono font-medium text-text-faint">
                {activeContent.number}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-text sm:text-3xl">
                {activeContent.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
                {activeContent.desc}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border/50">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent">
                {c.tabs[activeTab]}
              </span>
            </div>
          </div>

          {/* Sub-Service Cards (Right) */}
          <div className="flex flex-col gap-5">
            {activeContent.services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/50 hover:bg-surface-2 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <h4 className="font-display text-lg font-semibold text-text group-hover:text-accent transition-colors">
                    {service.title}
                  </h4>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
