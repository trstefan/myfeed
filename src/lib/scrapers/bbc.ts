import Parser from "rss-parser";

export default async function scrapeBBC() {
  const parser = new Parser({
    customFields: {
      item: [
        ["media:thumbnail", "thumbnail"], // store <media:thumbnail> in item.thumbnail
        ["media:content", "mediaContent"], // optional, in case <media:content> exists
      ],
    },
  });

  const feed = await parser.parseURL(
    "https://feeds.bbci.co.uk/news/world/rss.xml"
  );

  const articles = feed.items.map((item) => ({
    title: item.title || "",
    link: item.link || "#",
    content: item.contentSnippet || "",
    source: "BBC",
    img:
      item.enclosure?.url ||
      item.thumbnail?.url ||
      item.mediaContent?.url ||
      null,
  }));

  return articles.slice(0, 10); // grab first 10
}
