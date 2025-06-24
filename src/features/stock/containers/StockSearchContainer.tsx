"use client"

import { useState } from "react";
import StockSearchBar from "../components/StockSearch";
import { useStockSearch } from "../hooks/useSearchStock";

export default function StockSearchContainer() {
    const [searchStock, setSearchStock] = useState('');
    const { results, loading, error, search } = useStockSearch();

    const handleSubmit = () => {
        if (!searchStock.trim()) return;
        search(searchStock.trim()); // trigger search
    };


    return (
        <div className="flex flex-col justify-center items-center">
            <StockSearchBar value={searchStock} onChange={(val) => setSearchStock(val)} onSubmit={handleSubmit} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}

            {results.map((stock) => (
                <div key={stock.symbol}>
                    <p>
                        <strong>{stock.symbol}</strong> — {stock.name} ({stock.region}, {stock.currency})
                    </p>
                </div>
            ))}
        </div>
    )
}