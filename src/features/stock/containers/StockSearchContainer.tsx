"use client"

import { useState } from "react";
import StockSearchBar from "../components/StockSearch";
// import { useStockSearch } from "../hooks/useSearchStock";
import { mockStockQuotes } from "@/mock/stockQuotes";
import StockItemDisplay from "@/components/stock/StockItem";
import useWatchlist from "@/features/watchlist/hooks/useWatchlist";

export default function StockSearchContainer() {
    const [searchStock, setSearchStock] = useState('');
    const [results, setResults] = useState(mockStockQuotes);

    // const { results, loading, error, search } = useStockSearch();
    const { toggle, isWatched } = useWatchlist();

    const handleSubmit = () => {
        const query = searchStock.trim().toLowerCase();

        if (!query) {
            setResults(mockStockQuotes);
            return;
        }

        const filtered = mockStockQuotes.filter(stock =>
            stock.symbol.toLowerCase().includes(query) ||
            stock.symbol.toLowerCase() === query
        );

        setResults(filtered);
    };


    return (
        <div className="flex flex-col justify-center items-center border-b-2 border-blue-800">
            <StockSearchBar value={searchStock} onChange={(val) => setSearchStock(val)} onSubmit={handleSubmit} />
            {results.length === 0 ? (
                <p className="text-gray-500">No stocks found.</p>
            ) : (
                results.map(stock => (
                    <StockItemDisplay key={stock.symbol} stock={stock} onToggleWatchlist={toggle} isWatched={isWatched(stock.symbol)} />
                ))
            )}
            {/* {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>} */}

            {/* {results.map((stock) => (
                <div key={stock.symbol}>
                    <p>
                        <strong>{stock.symbol}</strong> - {stock.name} ({stock.region}, {stock.currency})
                    </p>
                </div>
            ))} */}
        </div>
    )
}