import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "KAALEX Blog | Insights, Strategy & Digital Growth",
  description:
    "Read practical insights about product strategy, UI/UX design, digital marketing, and WordPress-powered publishing for growth-focused businesses.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "KAALEX Blog | Insights, Strategy & Digital Growth",
    description:
      "Read practical insights about product strategy, UI/UX design, digital marketing, and WordPress-powered publishing for growth-focused businesses.",
    url: "https://kaalexstudio.com/blog",
    siteName: "KAALEX",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <section className="bg-bg">
      <div className="container-page py-16 sm:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
            Insights
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Articles for teams building smarter digital experiences.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            Strategy, design, growth, and publishing ideas that help businesses move faster with more clarity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-transform hover:-translate-y-1">
              <div className="relative h-52 w-full overflow-hidden bg-bg-elevated">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.14em] text-text-muted">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-text">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-text-muted">
                  <span>{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="font-medium text-accent hover:text-accent-2">
                    Read article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
