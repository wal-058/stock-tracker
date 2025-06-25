'use client'

import { useMemo } from "react";
import useFetchStockQuotes from "../../../hooks/useFetchStockQuotes";
// import { mockStockQuotes } from "@/mock/stockQuotes";
import useWatchlist from "@/features/watchlist/hooks/useWatchlist";
import StockItemDisplay from "@/components/stock/StockItem";
import { geistMono } from "@/app/fonts";

export default function StockListContainer() {
    // const predefinedStocks = useMemo(() => mockStockQuotes, []);
    const predefinedStocks = useMemo(() => ['AAPL', 'GOOGL', 'MSFT'], [])
    const { toggle, isWatched } = useWatchlist();

    // API
    const { data, loading, error } = useFetchStockQuotes(predefinedStocks);

    // MOCK
    // const data = predefinedStocks;

    if (loading) return <p>Loading stock data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col justify-center items-center h-full bg-transparent">
            <h2 className={`${geistMono.className} text-lg font-bold text-white mb-4`}>POPULAR</h2>
            {data.map((stock) => (
                <div key={stock.symbol} className="mb-4">
                    <StockItemDisplay stock={stock} onToggleWatchlist={toggle} isWatched={isWatched(stock.symbol)} />
                </div>
            ))}
        </div>
    );
}
