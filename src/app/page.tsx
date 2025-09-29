import { Navbar } from "@/components/navbar";
import { NewsPanel } from "@/components/news-panel";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  mb-6 text-balance text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              MyFeed
            </h1>
          </div>
        </section>
        <NewsPanel />
      </main>
    </div>
  );
}
