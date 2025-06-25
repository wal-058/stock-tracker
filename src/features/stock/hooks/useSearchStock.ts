import { useState } from 'react';
import { StockSearchResult } from '../types';

const API_KEY = process.env.PLATFORM_KEY;

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
        `https://finnhub.io/api/v1/search?q=${encodeURIComponent(query)}&token=${API_KEY}`
      );

      const data = await res.json();

      if (!data.result || data.result.length === 0) {
        setResults([]);
        setError("No results found.");
        return;
      }

      const parsed = data.result.map((match: { description: string, symbol: string }) => ({
        name: match.description,
        symbol: match.symbol,
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
