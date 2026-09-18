"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { useLanguage } from "@/context/language-context";

type CategoryFilter = "all" | "branding" | "uiux" | "web" | "social";

export function PortfolioWork() {
  const { t } = useLanguage();
  const w = t.portfolio.work;
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const filterCategories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: w.categories.all },
    { key: "branding", label: w.categories.branding },
    { key: "uiux", label: w.categories.uiux },
    { key: "web", label: w.categories.web },
    { key: "social", label: w.categories.social },
  ];

  const filteredProjects = w.projects.filter((p) =>
    selectedCategory === "all" ? true : p.category === selectedCategory
  );

  return (
    <section className="border-b border-border bg-bg py-16 sm:py-24">
      <div className="container-page">
        {/* Header with Title and Filter Tabs */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl font-bold tracking-tight text-text sm:text-3xl">
            {w.title}
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={clsx(
                  "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-150 sm:text-sm",
                  selectedCategory === cat.key
                    ? "bg-accent text-accent-contrast shadow-sm"
                    : "border border-border bg-surface text-text-muted hover:border-text-faint hover:text-text"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md"
            >
              {/* Image Container with 4:3 Aspect Ratio matching design */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg-elevated">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={95}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Category Pill floating on top */}
                <div className="absolute top-3.5 rtl:right-3.5 ltr:left-3.5">
                  <span className="inline-block rounded-full bg-bg/85 px-3 py-1 text-[11px] font-medium text-text backdrop-blur-md shadow-sm">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Title Overlay appearing on hover */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="font-display text-sm font-semibold text-white sm:text-base drop-shadow-sm">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
