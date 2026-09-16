"use client";

import { ArrowDown, ArrowRight, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { useLanguage } from "@/context/language-context";

export default function ContactPage() {
  return <ContactContent />;
}

function ContactContent() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section className="bg-bg">
      <div className="relative isolate overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-y-0 right-[-8%] z-[-1] w-[70%] opacity-70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent 0 18px, color-mix(in srgb, var(--accent) 15%, transparent) 19px 20px, transparent 21px 34px)",
            maskImage: "linear-gradient(120deg, transparent 20%, black 72%, transparent 100%)",
          }}
        />
        <div className="container-page grid min-h-97.5 items-center py-16 sm:min-h-125 sm:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {c.eyebrow}
            </span>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
              {c.desc}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="#project-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-medium text-accent-contrast transition-colors hover:bg-accent-2">
                {c.eyebrow}
                <ArrowRight size={16} />
              </Link>
            </div>
            <a href="#project-form" className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-text-faint transition-colors hover:text-text">
              {c.explore}
              <ArrowDown size={14} className="text-accent" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page py-10 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <ContactForm id="project-form" variant="project" />
        </div>

        <div className="mx-auto mt-10 max-w-5xl rounded-xl border border-border bg-bg-elevated px-6 py-7 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-base font-semibold text-text">{c.otherWays}</h2>
              <p className="mt-1 text-xs text-text-muted">{c.otherWaysDesc}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-8">
            <a
              href="https://wa.me/201271705556"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 transition-colors hover:text-accent"
            >
              <MessageCircle className="mt-0.5 text-accent" size={18} />
              <span>
                <span className="block text-sm font-semibold text-text">{c.whatsapp}</span>
                <span className="mt-1 block text-xs text-text-muted">{c.whatsappDesc}</span>
              </span>
            </a>
            <a
              href="mailto:hello@kaalexstudio.com"
              className="flex items-start gap-3 transition-colors hover:text-accent"
            >
              <Mail className="mt-0.5 text-accent" size={18} />
              <span>
                <span className="block text-sm font-semibold text-text">{c.email}</span>
                <span className="mt-1 block text-xs text-text-muted">{c.emailDesc}</span>
              </span>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}