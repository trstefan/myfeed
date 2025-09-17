import { NextResponse } from "next/server";
import scrapeBBC from "@/lib/scrapers/bbc";
import scrapePolitico from "@/lib/scrapers/politico";
import scrapeLeMonde from "@/lib/scrapers/lemonde";

export async function GET() {
  try {
    const [bbc, politico, lemonde] = await Promise.all([
      scrapeBBC(),
      scrapePolitico(),
      scrapeLeMonde(),
    ]);

    const articles = [...bbc, ...politico, ...lemonde];
    return NextResponse.json({ success: true, articles });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
