"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0  transition-opacity duration-300" />
            <h1 className="relative z-10 font-bold text-lg text-foreground">
              MyFeed
            </h1>
          </div>

          {/* Dark Mode Toggle */}
          <div
            className={`
            relative overflow-hidden transition-all duration-700 ease-out
            bg-card/50 backdrop-blur-sm border border-border/50
            liquid-effect hover:scale-105
            ${isScrolled ? "shadow-md" : "shadow-sm"}
          `}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="relative z-10 h-10 w-20 rounded-full hover:bg-accent/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <div className="relative z-10 flex items-center gap-2">
                {isDark ? (
                  <Sun className="h-4 w-4 text-accent" />
                ) : (
                  <Moon className="h-4 w-4 text-primary" />
                )}
                <span className="text-xs font-medium">
                  {isDark ? "Light" : "Dark"}
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
