"use client";

import { useState } from "react";
import StockSearchBar from "../components/StockSearch";
// import StockItemDisplay from "@/components/stock/StockItem";
// import useWatchlist from "@/features/watchlist/hooks/useWatchlist";
// import { useStockSearch } from "../hooks/useSearchStock"; 
// import { mockStockQuotes } from "@/mock/stockQuotes";
import SearchResultItemDisplay from "../components/SearchResutltem";
import { useDebouncedStockSearch } from "../hooks/useDebouncedStockSearch";
import { geistMono } from "@/app/fonts";

export default function StockSearchContainer() {
    const [searchStock, setSearchStock] = useState('');
    // const [showingMock, setShowingMock] = useState(true);

    const { results, loading, error } = useDebouncedStockSearch(searchStock);

    // const displayResults = showingMock ? mockStockQuotes : results;
    const displayResults = results;
    console.log("results:", results, results.length, loading, error);

    return (
        <div className="flex flex-col justify-center items-center bg-transparent">
            <StockSearchBar
                value={searchStock}
                onChange={(val) => setSearchStock(val)}
            />

            {loading && <p className="text-gray-500 mt-4">Loading...</p>}
            {error && <p className="text-red-600 my-4">Error: {error}</p>}
            {displayResults.length !== 0 &&
                <h2 className={`${geistMono.className} text-lg font-bold text-white mb-4`}>SEARCH RESULTS</h2>
            }

            {displayResults.map((displayResult) => (
                <div key={`${displayResult.name}-${displayResult.symbol}`} className="mb-4">
                    <SearchResultItemDisplay stockSearchResult={displayResult} />
                </div>
            ))}
        </div>
    );
}
