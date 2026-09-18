export type PublishToWordPressInput = {
  wpUrl?: string;
  username?: string;
  appPassword?: string;
  title: string;
  content: string;
  excerpt?: string;
  status?: "draft" | "publish";
  slug?: string;
};

export async function publishToWordPress({
  wpUrl,
  username,
  appPassword,
  title,
  content,
  excerpt,
  status = "draft",
  slug,
}: PublishToWordPressInput) {
  if (!wpUrl || !username || !appPassword) {
    return {
      ok: false,
      message: "WordPress URL, username, and application password are required.",
    };
  }

  const endpoint = wpUrl.replace(/\/$/, "") + "/wp-json/wp/v2/posts";
  const auth = Buffer.from(`${username}:${appPassword}`).toString("base64");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        title,
        content,
        excerpt: excerpt || title,
        status,
        slug: slug || title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim(),
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return {
        ok: false,
        message: data?.message || "WordPress publishing failed.",
      };
    }

    return {
      ok: true,
      message: "Article published successfully to WordPress.",
      data,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not connect to WordPress.";
    return {
      ok: false,
      message,
    };
  }
}
