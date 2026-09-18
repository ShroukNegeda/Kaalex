import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article not found | KAALEX",
    };
  }

  return {
    title: `${post.title} | KAALEX Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | KAALEX Blog`,
      description: post.excerpt,
      url: `https://kaalexstudio.com/blog/${post.slug}`,
      siteName: "KAALEX",
      type: "article",
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-bg">
      <div className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-2">
            ← Back to blog
          </Link>

          <div className="mt-6 overflow-hidden rounded-[28px] border border-border bg-surface">
            <img src={post.image} alt={post.title} className="h-72 w-full object-cover sm:h-96" />
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-text-muted">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-text sm:text-5xl">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-muted">{post.excerpt}</p>

            <div className="prose prose-invert mt-10 max-w-none text-base leading-8 text-text">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-5 text-base leading-8 text-text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
