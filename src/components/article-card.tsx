"use client";

import { useState } from "react";
import { Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  category: string;
}

export function ArticleCard({
  title,
  excerpt,
  author,
  publishedAt,
  imageUrl,
  category,
}: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`
        group relative overflow-hidden cursor-pointer
        transition-all duration-500 ease-out
        hover:shadow-2xl hover:-translate-y-2
        bg-card border border-border/50
        ${isHovered ? "scale-[1.02]" : "scale-100"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Section */}
      <div className="relative overflow-hidden h-48 bg-muted">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardContent className="relative z-10 p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300 text-balance line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-foreground transition-colors duration-300">
          {excerpt}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <User className="h-3 w-3" />
            <span className="font-medium">{author}</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{publishedAt}</span>
          </div>
        </div>

        {/* Hover indicator */}
        <div
          className={`
          absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent
          transform transition-transform duration-300 ease-out
          ${isHovered ? "translate-y-0" : "translate-y-full"}
        `}
        />
      </CardContent>
    </Card>
  );
}
