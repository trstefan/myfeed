"use client";
import { useEffect, useState } from "react";
import { ArticleCard } from "./article-card";

export function NewsPanel() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/scrape")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center p-6">Loading...</p>;

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {articles.map((article, idx) => (
        <ArticleCard key={idx} {...article} />
      ))}
    </main>
  );
}
