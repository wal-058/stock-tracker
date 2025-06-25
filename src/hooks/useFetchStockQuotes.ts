import { fetchStockQuote } from '@/libs/fetchStockQuote';
import { StockItem } from '@/types/stock';
import { useState, useEffect } from 'react';

export default function useFetchStockQuotes(symbols: string[]) {
    const [data, setData] = useState<StockItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!symbols.length) return;

        const fetchAll = async () => {
            setLoading(true);
            setError(null);

            try {
                const promises = symbols.map((symbol) => fetchStockQuote(symbol));
                const results = await Promise.all(promises);

                setData(results.filter(Boolean) as StockItem[]);
            } catch {
                setError('Failed to fetch stock quotes.');
            } finally {
                setLoading(false);
            }
        };

        fetchAll();
    }, [symbols]);

    return { data, loading, error };
}
