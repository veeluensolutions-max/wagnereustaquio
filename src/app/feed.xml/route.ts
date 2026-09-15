import { ARTICLES_DATA } from "@/data/articles";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wagner-vasconcelos.eng.br";

export async function GET() {
  // Apenas artigos com status published entram no feed RSS
  const publishedArticles = ARTICLES_DATA.filter((article) => article.status === "published");

  const feedItems = publishedArticles
    .map((article) => {
      return `
      <item>
        <title><![CDATA[${article.title}]]></title>
        <link>${BASE_URL}/conhecimento/artigos/${article.slug}</link>
        <guid isPermaLink="true">${BASE_URL}/conhecimento/artigos/${article.slug}</guid>
        <description><![CDATA[${article.excerpt}]]></description>
        <pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>
        <author>Prof. Dr. Wagner Eustáquio de Vasconcelos</author>
        <category>${article.categoryLabel}</category>
      </item>
    `;
    })
    .join("");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Prof. Dr. Wagner Eustáquio de Vasconcelos | Artigos e Conhecimento</title>
        <link>${BASE_URL}</link>
        <description>Artigos técnicos sobre Inteligência Artificial, Engenharia, Lógica Fuzzy, Segurança de Processos e Meio Ambiente.</description>
        <language>pt-BR</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
        ${feedItems}
      </channel>
    </rss>
  `;

  return new Response(rssFeed.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
