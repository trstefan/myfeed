import Parser from "rss-parser";

// Define a type for the custom fields to ensure type safety.
type CustomItem = {
  thumbnail?: {
    $: { url: string };
  };
};

export default async function scrapeBBC() {
  const parser = new Parser<any, CustomItem>({
    customFields: {
      item: [
        ["media:thumbnail", "thumbnail"],
        // You can remove media:content if it's not present in the BBC feed to simplify
      ],
    },
  });

  const feed = await parser.parseURL(
    "https://feeds.bbci.co.uk/news/world/rss.xml"
  );

  const articles = feed.items.map(
    (
      item: CustomItem & {
        title?: string;
        link?: string;
        contentSnippet?: string;
      }
    ) => ({
      title: item.title || "",
      link: item.link || "#",
      content: item.contentSnippet || "",
      source: "BBC",
      // Correctly access the URL from the nested '$' property
      img: item.thumbnail?.["$"]?.["url"] || null,
    })
  );

  return articles.slice(0, 10);
}
