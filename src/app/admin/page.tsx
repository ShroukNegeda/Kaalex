"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "kaalex-admin-settings";
const POSTS_KEY = "kaalex-admin-posts";

type PostDraft = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "draft" | "publish";
};

type Settings = {
  wpUrl: string;
  username: string;
  appPassword: string;
};

const defaultDraft: PostDraft = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  status: "draft",
};

const defaultSettings: Settings = {
  wpUrl: "",
  username: "",
  appPassword: "",
};

const sections = [
  { label: "Posts", count: 12, active: true },
  { label: "SEO", count: 4, active: false },
  { label: "Media", count: 9, active: false },
  { label: "Settings", count: 2, active: false },
];

export default function AdminPage() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [draft, setDraft] = useState<PostDraft>(defaultDraft);
  const [status, setStatus] = useState<string>("Ready to publish");
  const [publishedPosts, setPublishedPosts] = useState<PostDraft[]>([]);

  useEffect(() => {
    const savedSettings = window.localStorage.getItem(STORAGE_KEY);
    const savedPosts = window.localStorage.getItem(POSTS_KEY);

    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    if (savedPosts) {
      setPublishedPosts(JSON.parse(savedPosts));
    }
  }, []);

  const draftSlug = useMemo(
    () =>
      draft.slug ||
      draft.title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-"),
    [draft.slug, draft.title]
  );

  const saveSettings = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    setStatus("WordPress settings saved successfully.");
  };

  const saveDraftLocally = (next: PostDraft) => {
    setDraft(next);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      ...settings,
      title: draft.title,
      slug: draftSlug,
      excerpt: draft.excerpt,
      content: draft.content,
      status: draft.status,
    };

    try {
      setStatus("Publishing article...");
      const response = await fetch("/api/wordpress/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to publish article.");
      }

      const nextPosts = [
        {
          ...draft,
          slug: payload.slug,
        },
        ...publishedPosts,
      ];

      setPublishedPosts(nextPosts);
      window.localStorage.setItem(POSTS_KEY, JSON.stringify(nextPosts));
      setStatus(result.message || "Article published.");
      setDraft(defaultDraft);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unexpected error while publishing.");
    }
  };

  return (
    <section className="bg-bg">
      <div className="container-page py-10 sm:py-14">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">Studio</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-text sm:text-5xl">
              Content dashboard
            </h1>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-xs font-medium text-text-muted">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            WordPress ready
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-border bg-surface shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
          <div className="flex border-b border-border bg-bg/80">
            {sections.map((section) => (
              <button
                key={section.label}
                type="button"
                className={`border-r border-border px-5 py-4 text-sm font-medium ${
                  section.active ? "bg-surface text-text" : "text-text-muted"
                }`}
              >
                {section.label}
                <span className="ml-2 rounded-full bg-bg px-2 py-0.5 text-[10px] text-text-muted">
                  {section.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid gap-0 xl:grid-cols-[270px_1fr_340px]">
            <aside className="border-r border-border bg-bg px-4 py-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Articles
                </h2>
                <button type="button" className="rounded-full border border-border px-2 py-1 text-[10px] text-text-muted">
                  New
                </button>
              </div>

              <div className="space-y-2">
                {publishedPosts.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-border bg-surface px-3 py-4 text-sm text-text-muted">
                    No posts yet.
                  </div>
                ) : (
                  publishedPosts.slice(0, 5).map((post, index) => (
                    <button
                      key={`${post.title}-${index}`}
                      type="button"
                      className="w-full rounded-2xl border border-border bg-surface px-3 py-3 text-left transition-colors hover:border-accent"
                    >
                      <div className="text-[10px] uppercase tracking-[0.14em] text-text-muted">{post.status}</div>
                      <div className="mt-2 text-sm font-medium text-text">{post.title || "Untitled"}</div>
                    </button>
                  ))
                )}
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="bg-surface px-5 py-5 sm:px-6">
              <div className="mb-5 flex flex-col gap-4 border-b border-border pb-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-text-muted">Draft</div>
                  <div className="mt-1 text-xl font-semibold text-text">{draft.title || "New article"}</div>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={draft.status}
                    onChange={(event) => saveDraftLocally({ ...draft, status: event.target.value as "draft" | "publish" })}
                    className="rounded-full border border-border bg-bg px-3 py-2 text-xs text-text outline-none"
                  >
                    <option value="draft">Draft</option>
                    <option value="publish">Publish</option>
                  </select>
                  <button
                    type="submit"
                    className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-contrast"
                  >
                    Publish
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                    Title
                  </label>
                  <input
                    value={draft.title}
                    onChange={(event) => saveDraftLocally({ ...draft, title: event.target.value })}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text outline-none focus:border-accent"
                    placeholder="Example: Why product strategy improves launch quality"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                    URL slug
                  </label>
                  <input
                    value={draft.slug}
                    onChange={(event) => saveDraftLocally({ ...draft, slug: event.target.value })}
                    className="w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text outline-none focus:border-accent"
                    placeholder="product-strategy-launch-quality"
                  />
                  <div className="mt-2 text-xs text-text-muted">Preview: /blog/{draftSlug || "your-slug"}</div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                    Excerpt
                  </label>
                  <textarea
                    value={draft.excerpt}
                    onChange={(event) => saveDraftLocally({ ...draft, excerpt: event.target.value })}
                    className="min-h-24 w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text outline-none focus:border-accent"
                    placeholder="Short summary that appears on the blog listing and SEO snippet"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-text-muted">
                    Content
                  </label>
                  <textarea
                    value={draft.content}
                    onChange={(event) => saveDraftLocally({ ...draft, content: event.target.value })}
                    className="min-h-[300px] w-full rounded-2xl border border-border bg-bg px-4 py-3 text-text outline-none focus:border-accent"
                    placeholder="Write your article here. You can include paragraphs, ideas, and insights."
                  />
                </div>
              </div>
            </form>

            <aside className="border-l border-border bg-bg px-4 py-5">
              <div className="space-y-5">
                <div className="rounded-2xl border border-border bg-surface p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
                    WordPress
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="mb-1 block text-[11px] uppercase tracking-[0.14em] text-text-muted">URL</label>
                      <input
                        value={settings.wpUrl}
                        onChange={(event) => setSettings({ ...settings, wpUrl: event.target.value })}
                        className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text outline-none focus:border-accent"
                        placeholder="https://example.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] uppercase tracking-[0.14em] text-text-muted">Username</label>
                      <input
                        value={settings.username}
                        onChange={(event) => setSettings({ ...settings, username: event.target.value })}
                        className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text outline-none focus:border-accent"
                        placeholder="admin"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] uppercase tracking-[0.14em] text-text-muted">App password</label>
                      <input
                        type="password"
                        value={settings.appPassword}
                        onChange={(event) => setSettings({ ...settings, appPassword: event.target.value })}
                        className="w-full rounded-xl border border-border bg-bg px-3 py-2 text-sm text-text outline-none focus:border-accent"
                        placeholder="••••••••"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={saveSettings}
                      className="mt-1 w-full rounded-full border border-border px-3 py-2 text-sm font-medium text-text hover:border-accent"
                    >
                      Save connection
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">Status</h3>
                  <p className="mt-4 rounded-2xl border border-dashed border-border bg-bg px-3 py-3 text-sm text-text-muted">
                    {status}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
