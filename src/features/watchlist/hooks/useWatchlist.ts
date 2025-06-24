import { useEffect, useState } from "react";

export default function useWatchlist() {
    const [watchlist, setWatchlist] = useState<string[]>([]);
    const [hasHydrated, setHasHydrated] = useState(false); // hydration flag

    useEffect(() => {
        const stored = localStorage.getItem("watchlist");
        if (stored) setWatchlist(JSON.parse(stored));
        setHasHydrated(true); // now it's safe to render
    }, []);

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
