import { useEffect, useState } from "react";
import { useStockSearch } from "./useSearchStock";

export function useDebouncedStockSearch(query: string, delay = 1000) {
    const { results, loading, error, search } = useStockSearch();
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [query, delay]);

    useEffect(() => {
        if (debouncedQuery.trim()) {
            search(debouncedQuery);
        }
    }, [debouncedQuery]);

    return { results, loading, error, search };
}
