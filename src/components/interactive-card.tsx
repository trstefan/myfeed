import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface InteractiveCardProps {
  title: string;
  description: string;
  href: string;
}

export function InteractiveCard({
  title,
  description,
  href,
}: InteractiveCardProps) {
  return (
    <Link
      href={href}
      className="group relative block rounded-3xl border-2 border-foreground/20 bg-background p-8 transition-all duration-300 hover:border-foreground/40 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <h3 className="text-3xl font-semibold text-foreground transition-colors duration-300 group-hover:text-foreground/90">
            {title}
          </h3>
          <p className="text-base text-muted-foreground transition-colors duration-300 group-hover:text-foreground/70">
            {description}
          </p>
        </div>
        <ArrowUpRight className="size-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-foreground/0 via-foreground/0 to-foreground/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}
