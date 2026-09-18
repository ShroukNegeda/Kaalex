import { NextResponse } from "next/server";
import { publishToWordPress } from "@/lib/wordpress";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { wpUrl, username, appPassword, title, content, excerpt, status, slug } = body ?? {};

    if (!title || !content) {
      return NextResponse.json(
        {
          ok: false,
          message: "Title and content are required.",
        },
        { status: 400 }
      );
    }

    const result = await publishToWordPress({
      wpUrl,
      username,
      appPassword,
      title,
      content,
      excerpt,
      status,
      slug,
    });

    if (!result.ok) {
      return NextResponse.json(result, { status: 400 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Unexpected server error.",
      },
      { status: 500 }
    );
  }
}
