import axios from "axios";
import * as cheerio from "cheerio";

export default async function scrapeHackerNews() {
  const { data } = await axios.get("https://news.ycombinator.com/");
  const $ = cheerio.load(data);

  const articles: { title: string; link: string }[] = [];

  $(".titleline a").each((_, el) => {
    articles.push({
      title: $(el).text(),
      link: $(el).attr("href") || "#",
    });
  });

  return articles.slice(0, 10); // limit to 10 articles
}
