import Parser from "rss-parser";

type Article = {
  title: string;
  link: string;
  content?: string;
  // Politico RSS may not include image in enclosure, but if so:
  img?: string;
  source: string;
};

export default async function scrapePolitico(): Promise<Article[]> {
  const parser = new Parser();
  const feed = await parser.parseURL("https://www.politico.eu/feed/");

  const articles: Article[] = feed.items.map((item) => ({
    title: item.title || "",
    link: item.link || "#",
    content: item.contentSnippet || item.content || "",
    img: item.enclosure?.url || undefined,
    source: "Politico",
  }));

  // Optional: limit number if you want
  return articles.slice(0, 10);
}
