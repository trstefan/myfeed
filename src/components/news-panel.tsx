"use client";

import { ArticleCard } from "./article-card";

// Sample data - in a real app, this would come from an API
const articles = [
  {
    id: 1,
    title: "Revolutionary AI Breakthrough Changes Everything",
    excerpt:
      "Scientists have developed a new AI system that can understand and generate human-like responses with unprecedented accuracy, marking a significant milestone in artificial intelligence research.",
    author: "Dr. Sarah Chen",
    publishedAt: "2 hours ago",
    imageUrl: "/ai-futuristic-city.png",
    category: "Technology",
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    excerpt:
      "World leaders unite on ambitious climate goals, setting new standards for carbon reduction and renewable energy adoption across all participating nations.",
    author: "Michael Rodriguez",
    publishedAt: "4 hours ago",
    imageUrl: "/climate-summit-leaders.png",
    category: "Environment",
  },
  {
    id: 3,
    title: "Space Mission Discovers New Exoplanet",
    excerpt:
      "NASA's latest space telescope has identified a potentially habitable exoplanet located just 40 light-years away, opening new possibilities for future exploration.",
    author: "Dr. Emily Watson",
    publishedAt: "6 hours ago",
    imageUrl: "/space-telescope-exoplanet-discovery.jpg",
    category: "Science",
  },
  {
    id: 4,
    title: "Breakthrough in Quantum Computing Achieved",
    excerpt:
      "Researchers have successfully demonstrated quantum supremacy in a new computing paradigm that could revolutionize data processing and encryption methods.",
    author: "Prof. James Liu",
    publishedAt: "8 hours ago",
    imageUrl: "/quantum-computer-laboratory.png",
    category: "Technology",
  },
  {
    id: 5,
    title: "Medical Innovation Offers Hope for Rare Diseases",
    excerpt:
      "A groundbreaking gene therapy treatment shows promising results in clinical trials, potentially offering new treatment options for previously incurable conditions.",
    author: "Dr. Amanda Foster",
    publishedAt: "10 hours ago",
    imageUrl: "/medical-research-lab.png",
    category: "Health",
  },
  {
    id: 6,
    title: "Sustainable Energy Grid Powers Entire City",
    excerpt:
      "A major metropolitan area successfully transitions to 100% renewable energy, demonstrating the viability of large-scale sustainable power systems.",
    author: "Robert Green",
    publishedAt: "12 hours ago",
    imageUrl: "/renewable-energy-solar-wind-city.jpg",
    category: "Environment",
  },
];

export function NewsPanel() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
            Latest News & Updates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Stay informed with the most recent developments in technology,
            science, and global affairs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              publishedAt={article.publishedAt}
              imageUrl={article.imageUrl}
              category={article.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
