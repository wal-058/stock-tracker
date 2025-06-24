'use client';

import { useMemo } from "react";
import useWatchlist from "@/features/watchlist/hooks/useWatchlist";

import StockItem from "@/components/stock/StockItem";
import { mockStockQuotes } from "@/mock/stockQuotes";

export default function WatchlistContainer() {
    const { watchlist, toggle, isWatched } = useWatchlist();

    // Getting watched quotes by comparing with symbols
    const watchlistStocks = useMemo(() => {
        return mockStockQuotes.filter((stock) => watchlist.includes(stock.symbol));
    }, [watchlist]);

    if (watchlistStocks.length === 0) {
        return <p className="text-gray-600 text-center">Your watchlist is empty.</p>;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {watchlistStocks.map((stock) => (
                <StockItem
                    key={stock.symbol}
                    stock={stock}
                    onToggleWatchlist={toggle}
                    isWatched={isWatched(stock.symbol)}
                />
            ))}
        </div>
    );
}
