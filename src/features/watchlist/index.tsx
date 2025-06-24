'use client';

import WatchlistContainer from "./containers/WatchlistContainer";

export default function Watchlist() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Your Watchlist</h1>
            <WatchlistContainer />
        </div>
    );
}
