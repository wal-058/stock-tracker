'use client'

import { useMemo } from "react";
// import useFetchStockQuotes from "../hooks/useFetchStockQuotes";
import { mockStockQuotes } from "@/mock/stockQuotes";
import useWatchlist from "@/features/watchlist/hooks/useWatchlist";
import StockItem from "@/components/stock/StockItem";

export default function StockListContainer() {
    const predefinedStocks = useMemo(() => mockStockQuotes, []);
    const { watchlist, toggle, isWatched } = useWatchlist();

    // API
    // const { data, loading, error } = useFetchStockQuotes(predefinedStocks);

    // MOCK
    const data = predefinedStocks;

    // if (loading) return <p>Loading stock data...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <div className="flex flex-col justify-center items-center">
            {data.map((stock) => (
                <StockItem key={stock.symbol} stock={stock} onToggleWatchlist={toggle} isWatched={isWatched(stock.symbol)} />
            ))}
        </div>
    );
}
