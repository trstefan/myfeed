// lib/scrapers/lemonde.ts
import Parser from "rss-parser";

type Article = {
  title: string;
  link: string;
  content?: string;
  img?: string;
  source: string;
};

export default async function scrapeLeMondeEurope(): Promise<Article[]> {
  const parser = new Parser();
  const feed = await parser.parseURL(
    "https://www.lemonde.fr/en/europe/rss_full.xml"
  );

  const articles: Article[] = feed.items.map((item) => ({
    title: item.title || "",
    link: item.link || "#",
    content: item.contentSnippet || item.content || "",
    // sometimes feed items have an enclosure or media:thumbnail
    img: item.enclosure?.url || undefined,
    source: "Le Monde",
  }));

  // Limit if desired
  return articles.slice(0, 10);
}
