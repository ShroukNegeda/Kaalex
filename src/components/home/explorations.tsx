"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { SectionHeading } from "../shared/section-heading";

const explorationImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80&fm=webp",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80&fm=webp",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80&fm=webp",
];

export function Explorations() {
  const { t } = useLanguage();
  const e = t.home.explorations;

  return (
    <section className="border-b border-border bg-bg py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading title={e.title} desc={e.desc} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {explorationImages.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative h-48 bg-bg-elevated">
                <Image
                  src={src}
                  alt={e.name}
                  title={e.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={65}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute top-4 rtl:right-4 ltr:left-4 rounded-full bg-bg/90 px-2.5 py-1 text-[11px] font-medium text-text backdrop-blur-sm">
                  {e.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-text">
                  {e.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{e.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
