import { InteractiveCard } from "@/components/interactive-card";

export default function Home() {
  const cards = [
    {
      title: "Design Systems",
      description:
        "Build scalable and consistent design systems that grow with your product and team.",
      href: "#design-systems",
    },
    {
      title: "Component Library",
      description:
        "Access a comprehensive collection of pre-built, customizable components for rapid development.",
      href: "#components",
    },
    {
      title: "Documentation",
      description:
        "Explore detailed guides, API references, and best practices to get the most out of your tools.",
      href: "#documentation",
    },
    {
      title: "Documentation",
      description:
        "Explore detailed guides, API references, and best practices to get the most out of your tools.",
      href: "#documentation",
    },
    {
      title: "Documentation",
      description:
        "Explore detailed guides, API references, and best practices to get the most out of your tools.",
      href: "#documentation",
    },
    {
      title: "Documentation",
      description:
        "Explore detailed guides, API references, and best practices to get the most out of your tools.",
      href: "#documentation",
    },
  ];

  return (
    <main className="min-h-screen bg-background p-6 md:p-12 lg:p-24">
      <div className="">
        <div className="grid gap-6 md:gap-8">
          {cards.map((card, index) => (
            <InteractiveCard
              key={index}
              title={card.title}
              description={card.description}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
