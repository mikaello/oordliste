import { NextResponse } from "next/server";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, description } = body ?? {};

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (
    !description ||
    typeof description !== "string" ||
    description.trim().length === 0
  ) {
    return NextResponse.json(
      { error: "Description is required" },
      { status: 400 }
    );
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Server is not configured for suggestions" },
      { status: 503 }
    );
  }

  const issueBody = `**Ord:** ${name.trim()}\n\n**Beskrivelse:**\n${description.trim()}`;

  const res = await fetch(
    "https://api.github.com/repos/mikaello/oordliste/issues",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        title: `Word suggestion: ${name.trim()}`,
        body: issueBody,
        labels: ["word suggestion"],
      }),
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to submit suggestion" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
