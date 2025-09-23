'use client';

import { geistMono } from '@/app/fonts';
import StockItemDisplay from '@/components/stock/StockItem';
import useStockQuotes from '@/hooks/useStockQuotes';

interface WatchlistContentProps {
    watchlist: string[],
    toggle: (symbol: string) => void;
    isWatched: (symbol: string) => boolean;
}

export default function WatchlistContent({ watchlist, toggle, isWatched }: WatchlistContentProps) {
    const fetchedQuotes = useStockQuotes(watchlist);

    if (!watchlist.length) {
        return <p className="text-gray-600 text-center">Your watchlist is empty.</p>;
    }

    return (
        <div className="flex flex-col items-center">
            <h2 className={`${geistMono.className} text-lg font-bold text-white mb-4`}>YOUR WATCHLIST</h2>

            {fetchedQuotes?.map((stock) => (
                <div key={stock.symbol}>
                    {stock.error && <>Error</>}
                    {stock.data && <div key={stock.symbol} className="mb-4">
                        <StockItemDisplay
                            stock={stock.data}
                            onToggleWatchlist={toggle}
                            isWatched={isWatched(stock.symbol)}
                        />
                    </div>}
                </div>
            ))}
        </div>
    );
}
