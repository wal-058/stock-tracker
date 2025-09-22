'use client'

import { useMemo } from "react";
import useWatchlist from "@/features/watchlist/hooks/useWatchlist";
import StockItemDisplay from "@/components/stock/StockItem";
import { geistMono } from "@/app/fonts";
import useStockQuotes from "@/hooks/useStockQuotes";
import { dummyStockItem } from "@/mock/stockQuotes";

export default function StockListContainer() {
    const predefinedStocks = useMemo(() => ['AAPL', 'GOOGL', 'MSFT'], [])

    const { toggle, isWatched } = useWatchlist();

    // API
    const fetchedQuotes = useStockQuotes(predefinedStocks);

    // MOCK
    // const data = predefinedStocks;

    // if (isLoading) return <p>Loading stock data...</p>;
    // if (error) return <p>Error: {error.message ?? error}</p>;

    return (
        <div className="flex flex-col justify-center items-center h-full bg-transparent mb-6">
            <h2 className={`${geistMono.className} text-lg font-bold text-white mb-4`}>POPULAR</h2>
            {fetchedQuotes?.map((stock) => (
                <div key={stock.symbol}>
                    {stock.isLoading && <div><p>Loading {stock.symbol}</p></div>}
                    {stock.error && <div><p>Error loading {stock.symbol}</p></div>}
                    {stock.data?.type === 'success' && (
                        <div className="mb-4">
                            <StockItemDisplay stock={stock.data.quote} onToggleWatchlist={toggle} isWatched={isWatched(stock.data.quote.symbol)} />
                        </div>
                    )}
                    {stock.data?.type === 'error' && (
                        <div key={stock.symbol} className="mb-4">
                            <StockItemDisplay stock={dummyStockItem} onToggleWatchlist={toggle} isWatched={isWatched(stock.symbol)} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}