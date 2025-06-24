import { useState } from 'react';
import { BestMatch } from '../types';

const API_KEY = process.env.PLATFORM_KEY; 

interface StockSearchResult {
  symbol: string;
  name: string;
  region: string;
  currency: string;
}

export function useStockSearch() {
  const [results, setResults] = useState<StockSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string) => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${API_KEY}`
      );

      const data = await res.json();

      if (!data.bestMatches) {
        setResults([]);
        setError("No results found.");
        return;
      }

      const parsed = data.bestMatches.map((match: BestMatch) => ({
        symbol: match["1. symbol"],
        name: match["2. name"],
        region: match["4. region"],
        currency: match["8. currency"],
      }));

      setResults(parsed);
    } catch (err: unknown) {
      setError("Failed to search for stocks.");
      console.log((err as Error)?.message);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, search };
}
