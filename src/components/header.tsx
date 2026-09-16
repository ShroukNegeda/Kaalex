"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "@/context/language-context";

export function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const projectHref = "/contact";

  const searchableItems = useMemo(
    () => [
      { href: "/", label: t.nav.home, keywords: ["home", "main", "landing"] },
      {
        href: "/about",
        label: t.nav.about,
        keywords: ["about", "who we are", "team", "vision", "mission", "story"],
      },
      {
        href: "/services",
        label: t.nav.services,
        keywords: [
          "services",
          "solutions",
          "website",
          "app",
          "design",
          "marketing",
          "seo",
          "development",
        ],
      },
      {
        href: "/portfolio",
        label: t.nav.portfolio,
        keywords: ["portfolio", "work", "projects", "showcase", "case study"],
      },
    ],
    [t.nav.about, t.nav.home, t.nav.portfolio, t.nav.services]
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchableItems;
    }

    return searchableItems.filter(({ label, keywords }) => {
      const haystack = [label, ...keywords].join(" ").toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [searchQuery, searchableItems]);

  useEffect(() => {
    if (!searchOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [searchOpen]);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  const handleProjectClick = () => setOpen(false);

  const handleLogoClick = () => {
    setOpen(false);

    if (pathname === "/") {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  };

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/portfolio", label: t.nav.portfolio },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container-page relative flex h-18 items-center justify-between py-3.5">
        <Link href="/" onClick={handleLogoClick} className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  active ? "text-accent" : "text-text-muted hover:text-text"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            aria-label={t.nav.search}
            onClick={() => setSearchOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-text-faint"
          >
            <Search size={15} />
          </button>
          <Button
            href={projectHref}
            onClick={handleProjectClick}
            size="md"
            icon={<ArrowRight size={15} />}
          >
            {t.nav.startProject}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label={t.nav.search}
            onClick={() => setSearchOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text"
          >
            <Search size={15} />
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-bg px-4 py-4">
          <div className="container-page">
            <div className="mx-auto max-w-2xl">
              <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2.5">
                <Search size={15} className="text-text-muted" />
                <input
                  autoFocus
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder={t.nav.searchPlaceholder}
                  className="w-full bg-transparent text-sm text-text placeholder:text-text-faint focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    aria-label={t.nav.closeSearch}
                    onClick={() => setSearchQuery("")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-text-muted"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="mt-4 space-y-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeSearch}
                      className="block rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text transition-colors hover:border-accent hover:bg-surface-2"
                    >
                      {item.label}
                    </Link>
                  ))
                ) : (
                  <p className="rounded-2xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-text-muted">
                    {t.nav.searchNoResults}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="border-t border-border bg-bg px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "text-base font-medium",
                  pathname === link.href ? "text-accent" : "text-text"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <Button
            href={projectHref}
            onClick={handleProjectClick}
            className="mt-5 w-full"
            icon={<ArrowRight size={15} />}
          >
            {t.nav.startProject}
          </Button>
        </div>
      )}
    </header>
  );
}
