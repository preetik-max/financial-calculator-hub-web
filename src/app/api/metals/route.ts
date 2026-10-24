import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const TROY_OUNCE_GRAMS = 31.1034768;

export async function GET() {
  const apiKey = process.env.GOLDAPI_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "GoldAPI key is not configured. Add GOLDAPI_KEY to .env.local." },
      { status: 503 },
    );
  }

  try {
    const headers = { "x-access-token": apiKey };
    const [goldResponse, silverResponse] = await Promise.all([
      fetch("https://www.goldapi.io/api/XAU/INR", { headers, cache: "no-store" }),
      fetch("https://www.goldapi.io/api/XAG/INR", { headers, cache: "no-store" }),
    ]);

    if (!goldResponse.ok || !silverResponse.ok) {
      return NextResponse.json(
        { error: "GoldAPI.io could not return prices. Check your API key and plan." },
        { status: 502 },
      );
    }

    const [gold, silver] = await Promise.all([goldResponse.json(), silverResponse.json()]);
    const rates = {
      "24K": Number(gold.price_gram_24k),
      "22K": Number(gold.price_gram_22k),
      "18K": Number(gold.price_gram_18k),
    };
    const silverPerGram = Number(silver.price) / TROY_OUNCE_GRAMS;

    if (
      !Object.values(rates).every((value) => Number.isFinite(value) && value > 0) ||
      !Number.isFinite(silverPerGram) ||
      silverPerGram <= 0
    ) {
      return NextResponse.json({ error: "GoldAPI.io returned invalid prices." }, { status: 502 });
    }

    return NextResponse.json({
      currency: "INR",
      unit: "gram",
      fetchedAt: new Date().toISOString(),
      gold: rates,
      silver: silverPerGram,
      source: "GoldAPI.io",
    });
  } catch {
    return NextResponse.json({ error: "Unable to contact GoldAPI.io. Manual rates are still available." }, { status: 502 });
  }
}
