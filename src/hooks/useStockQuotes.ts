import { fetchStockQuote } from "@/libs/fetchStockQuote";
import useSWR from "swr";

export default function useStockQuotes(symbols: string[]) {

    console.log(symbols, symbols.length);

    return symbols.map((symbol) => {
        const { data, error, isLoading } = useSWR(
            symbols.length > 0 ? ['stock-quote', symbol] : null,
            () => fetchStockQuote(symbol), {
            revalidateIfStale: true,
            revalidateOnFocus: false,
            refreshInterval: 20000,
            dedupingInterval: 20000,
        })
        return { symbol, data, error, isLoading };
    })
}