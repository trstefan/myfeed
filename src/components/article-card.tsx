"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ArticleCardProps {
  title: string;
  content: string;
  img?: string;
  link: string;
  source: string;
}

export function ArticleCard({
  title,
  content,
  img,
  link,
  source,
}: ArticleCardProps) {
  return (
    <div
      className="group relative h-48 sm:h-80 overflow-hidden rounded-lg shadow-xl flex-1 min-w-[290px] m-2.5 transform translate-z-0 backface-visibility-hidden
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-transparent before:to-black/70 before:z-0
      lg:hover:shadow-2xl"
    >
      {img ? (
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading based on viewport
          priority={true} // Prioritize loading for above-the-fold images
          style={{ objectFit: "cover" }}
          className="transition-transform duration-1000 ease-in-out transform-gpu backface-visibility-hidden relative z-[-1]
          group-hover:scale-125"
        />
      ) : (
        <img
          src="/news-placeholder.png"
          alt="Default placeholder image"
          className="w-full h-full block object-cover transition-transform duration-1000 ease-in-out transform-gpu backface-visibility-hidden relative z-[-1]
          group-hover:scale-125"
        />
      )}
      <div className="absolute bottom-0 p-4 text-white font-bold transition-colors duration-500 ease-in-out group-hover:bg-black/60 w-full">
        <h2 className="transition-colors duration-500 ease-in-out mb-2 group-hover:text-yellow-400">
          {title}
        </h2>
        <div className="text-xs mb-2 text-gray-400">Jan 29, 2018</div>
        <div className="max-h-0 opacity-0 transition-[max-height,opacity] duration-500 ease-in-out lg:group-hover:max-h-80 lg:group-hover:opacity-100">
          <p className="font-light">{content}</p>
        </div>
        <div className="flex w-full mt-4">
          <div className="flex items-center justify-between w-full">
            <span className="text-md font-semibold text-gray-300 truncate">
              {source}
            </span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-3 py-1 bg-yellow-400 text-black rounded text-xs font-semibold shadow transition-colors
              opacity-0 pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto
              hover:bg-yellow-500"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
