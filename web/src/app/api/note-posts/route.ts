import { NextResponse } from "next/server";

export async function GET() {
  const USERNAME = "anchorcareer";
  const res = await fetch(`https://note.com/${USERNAME}/rss`, {
    next: { revalidate: 3600 },
  });

  const xml = await res.text();

  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)]
    .slice(0, 5)
    .map((m) => {
      const item = m[1];
      const get = (tag: string) =>
        item.match(
          new RegExp(
            `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`,
          ),
        )?.[1] ??
        item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`))?.[1] ??
        "";

      return {
        title: get("title"),
        link: get("link"),
        pubDate: get("pubDate"),
        description: get("description"),
        thumbnail: item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ?? "",
      };
    });

  return NextResponse.json(items);
}
