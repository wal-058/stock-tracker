import useSWR from 'swr';
import { fetchStockQuote } from '@/libs/fetchStockQuote';
import type { StockItem } from '@/types/stock';

const makeKey = (symbols: string[]) => (symbols.length ? symbols : null);

async function batchFetcher(symbols: string[]) {
    const results = await Promise.all(symbols.map(fetchStockQuote));
    return results.filter(Boolean) as StockItem[];
}

export default function useStockQuotesSWR(symbols: string[]) {
    console.log('symbols data', symbols);
    const { data, error, isLoading } = useSWR<StockItem[]>(
        makeKey(symbols),
        batchFetcher,
        {
            refreshInterval: 61000,
            revalidateOnFocus: true,
        }
    );

    return { data: data ?? [], error, isLoading };
}
