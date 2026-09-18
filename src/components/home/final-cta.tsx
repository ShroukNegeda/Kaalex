"use client";

import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "../button";
import { ContactForm } from "../contact-form";

export function FinalCta() {
  const { t } = useLanguage();
  const c = t.home.finalCta;

  return (
    <section className="bg-bg-elevated py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl">
            {c.titleA}{" "}
            <span className="text-accent">{c.titleHighlight}</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-text-muted">{c.desc}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              href="/contact"
              size="md"
              icon={<ArrowRight size={15} />}
            >
              {t.nav.startProject}
            </Button>
            <a
              href="mailto:hello@kaalexstudio.com"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-text-faint"
            >
              <Mail size={15} />
              {c.email}
            </a>
            <a
              href="https://wa.me/201271705556"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-text-faint"
            >
              <MessageCircle size={15} />
              {c.whatsapp}
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
