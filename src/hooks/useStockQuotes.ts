import { fetchStockQuote } from "@/libs/fetchStockQuote";
import { StockItem } from "@/types/stock";
import useSWR from "swr";

function normalize(symbols: string[]) {
    const uniq = Array.from(new Set(symbols.map(s => s.trim().toUpperCase())));
    uniq.sort();
    return uniq;
}

async function fetchBatch(symbols: string[]): Promise<StockItem[]> {
    const results = await Promise.all(symbols.map(fetchStockQuote));
    console.log("> results", results)
    const ok = results.filter(v => v && v.type === 'success');
    console.log("> ok", ok);
    return ok.map(v => v.quote) as StockItem[];
}

export default function useStockQuotes(symbols: string[]) {
    console.log(symbols, symbols.length);
    const input = symbols ?? [];

    const norm = normalize(symbols);
    const key = norm.length > 0 ? ['stock-quote', ...norm] : null;

    const { data, error, isLoading } = useSWR(
        key,
        (k: readonly string[]) => {
            const [, ...syms] = k;
            console.log('fetcher syms', syms);
            return fetchBatch(syms);
        }, {
        revalidateIfStale: true,
        revalidateOnFocus: false,
        refreshInterval: 20000,
        dedupingInterval: 20000,
    })

    // Adjusting return wrt UI
    const bySymbol = (data ?? []).reduce<Record<string, StockItem>>((acc, item) => {
        acc[item.symbol.toUpperCase()] = item;
        return acc;
    }, {});

    const list = input.map((s) => ({
        symbol: s,
        data: bySymbol[s.toUpperCase()],
        error,
        isLoading,
    }));

    return list;
}