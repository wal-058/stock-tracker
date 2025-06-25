'use client';

import { geistMono } from '@/app/fonts';
import StockItemDisplay from '@/components/stock/StockItem';
import useWatchlist from '@/features/watchlist/hooks/useWatchlist';
import useFetchStockQuotesSWR from '@/hooks/useFetchStockQuotesSWR';

export default function WatchlistContainer() {
    const { watchlist, toggle, isWatched } = useWatchlist();
    const { data, error, isLoading } = useFetchStockQuotesSWR(watchlist);

    if (!watchlist.length) {
        return <p className="text-gray-600 text-center">Your watchlist is empty.</p>;
    }
    if (isLoading) {
        return <p className="text-gray-500 text-center">Loading your watchlist...</p>;
    }
    if (error) {
        return <p className="text-red-500 text-center">Error loading watchlist</p>;
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className={`${geistMono.className} text-lg font-bold text-white mb-4`}>YOUR WATCHLIST</h2>

            {data.map((stock) => (
                <div key={stock.symbol} className="mb-4">
                    <StockItemDisplay
                        stock={stock}
                        onToggleWatchlist={toggle}
                        isWatched={isWatched(stock.symbol)}
                    />
                </div>
            ))}
        </div>
    );
}
