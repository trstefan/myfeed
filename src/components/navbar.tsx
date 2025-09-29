"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
      ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name Section */}
          <div className="relative">
            {" "}
            {/* Use a relative container for z-indexing */}
            <div className=" absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0  transition-opacity duration-300" />
            <div className="flex items-center gap-4">
              <div className="relative z-10">
                {" "}
                {/* Ensure this link is on top */}
                <Link href="/">
                  <h1 className="font-bold text-lg text-foreground">MyFeed</h1>
                </Link>
              </div>
              <div className="relative z-10">
                {" "}
                {/* Ensure this link is on top */}
                <Link href="/reading-list">
                  <h2 className="text-foreground/80 font-normal hover:text-foreground transition-colors duration-200 ease-in-out">
                    Reading List
                  </h2>
                </Link>
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div>
            <Button
              variant="default"
              size="sm"
              onClick={toggleDarkMode}
              className="relative z-10 h-10 w-10 rounded-full hover:bg-accent/20 transition-all duration-300"
            >
              <div className="relative z-10 flex items-center gap-2">
                {isDark ? (
                  <Sun className="h-4 w-4 text-black" />
                ) : (
                  <Moon className="h-4 w-4 text-primary" />
                )}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
