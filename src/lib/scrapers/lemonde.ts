// lib/scrapers/lemonde.ts
import Parser from "rss-parser";

type Article = {
  title: string;
  link: string;
  content?: string;
  img?: string;
  source: string;
};

// Create a custom type for the RSS item to include the media content
type CustomItem = {
  // item is the name of the tag, then media is the namespace.
  // The attribute we want is `content` which contains the url property.
  "media:content": {
    $: {
      url: string;
    };
  };
};

export default async function scrapeLeMondeEurope(): Promise<Article[]> {
  // Configure the parser to include the 'media:content' tag as a custom field
  const parser = new Parser<any, CustomItem>({
    customFields: {
      item: ["media:content"],
    },
  });

  const feed = await parser.parseURL(
    "https://www.lemonde.fr/en/europe/rss_full.xml"
  );

  const articles: Article[] = feed.items.map(
    (item: CustomItem & Parser.Item) => ({
      title: item.title || "",
      link: item.link || "#",
      content: item.contentSnippet || item.content || "",
      // Access the URL from the parsed 'media:content' field
      img:
        item["media:content"]?.["$"]?.["url"] ||
        item.enclosure?.url ||
        undefined,
      source: "Le Monde",
    })
  );

  // Limit if desired
  return articles.slice(0, 10);
}
