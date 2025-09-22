'use client';

import useWatchlist from '@/features/watchlist/hooks/useWatchlist';
import WatchlistContent from './WatchlistContent';

export default function WatchlistContainer() {
    const { watchlist, toggle, isWatched } = useWatchlist();

    if (!watchlist.length) {
        return <p className="text-gray-600 text-center">Your watchlist is empty.</p>;
    }

    return (
        <WatchlistContent watchlist={watchlist} toggle={toggle} isWatched={isWatched} />
    );
}
