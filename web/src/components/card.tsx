import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
};

async function getPosts(): Promise<Post[]> {
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

  return items;
}

export default async function NotePosts() {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Link
          key={post.link}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-xl backdrop-opacity-60 text-black backdrop-blur-3xl hover:-rotate-x-5 hover:rotate-y-5 duration-200 delay-100 hover:shadow-xs"
        >
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
          <div className="p-4">
            <p className="text-xs text-gray-400 mb-1">
              {new Date(post.pubDate).toLocaleDateString("ja-JP")}
            </p>
            <div className="font-semibold text-gray-800 line-clamp-2">
              {post.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
