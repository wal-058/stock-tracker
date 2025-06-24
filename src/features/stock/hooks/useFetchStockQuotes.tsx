import { useState, useEffect } from 'react';

const API_KEY = process.env.PLATFORM_KEY;

export default function useFetchStockQuotes(symbols: string[]) {
    const [data, setData] = useState<StockItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!symbols.length) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            const results: StockItem[] = [];

            try {
                for (const symbol of symbols) {
                    const res = await fetch(
                        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
                    );

                    const json = await res.json();
                    const quote = json["Global Quote"];

                    if (quote) {
                        results.push({
                            symbol: quote["01. symbol"],
                            openPrice: quote["02. open"],
                            highPrice: quote["03. high"],
                            lowPrice: quote["04. low"],
                            latestPrice: quote["05. price"],
                            volume: quote["06. volume"],
                            lastestTradingDay: quote["07. latest trading day"],
                            previousClosePrice: quote["08. previous close"],
                            priceChange: quote["09. change"],
                            priceChangePercent: quote["10. change percent"],
                        });
                    }
                }

                setData(results);
            } catch (err: any) {
                setError('Failed to fetch stock quotes.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [symbols]);

    return { data, loading, error };
}
