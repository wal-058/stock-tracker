import { useEffect, useState } from "react";

export default function useWatchlist() {
    const [watchlist, setWatchlist] = useState<string[]>([]);
    const [hasHydrated, setHasHydrated] = useState(false); 

    // Once we are sure it's loaded on client, 
    // we can get watchlist from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("watchlist");
        if (stored) setWatchlist(JSON.parse(stored));
        setHasHydrated(true);
    }, []);

    // Once again, when it's loaded on client,
    // we can safely update it
    useEffect(() => {
        if (hasHydrated) {
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
        }
    }, [watchlist, hasHydrated]);

    const add = (symbol: string) =>
        setWatchlist((prev) => [...new Set([...prev, symbol])]);

    const remove = (symbol: string) =>
        setWatchlist((prev) => prev.filter((s) => s !== symbol));

    const toggle = (symbol: string) => {
        if (watchlist.includes(symbol)) remove(symbol);
        else add(symbol);
    };

    const isWatched = (symbol: string) => watchlist.includes(symbol);

    return { watchlist, add, remove, toggle, isWatched, hasHydrated };
}
