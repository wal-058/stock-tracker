import { FetchQuoteResult } from '@/types/stock';

const API_KEY = process.env.PLATFORM_KEY;

export async function fetchStockQuote(symbol: string): Promise<FetchQuoteResult> {
    try {
        console.log(`[fetchStockQuote] Fetching ${symbol}`);
        const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${API_KEY}`);
        
        if (!res.ok) {
            // console.error(`[fetchStockQuote] ${symbol} failed with status: ${res.status}`);
            // console.error(`[Full fetchStockQuote] [${symbol}]`, res);
            return {
                type: 'error',
                statusCode: res.status,
                message: res.statusText
            };
        }

        const quote = await res.json();
        console.log(`[fetchStockQuote] ${symbol} quote:`, quote);

        if (!quote || quote.c === 0) return {
            type: 'error',
            statusCode: res.status,
            message: res.statusText 
        };

        return {
            type: 'success',
            quote: {
                symbol,
                openPrice: quote.o.toString(),
                highPrice: quote.h.toString(),
                lowPrice: quote.l.toString(),
                latestPrice: quote.c.toString(),
                volume: 'N/A',
                lastestTradingDay: new Date(quote.t * 1000).toISOString().split('T')[0],
                previousClosePrice: quote.pc.toString(),
                priceChange: (quote.c - quote.pc).toFixed(2),
                priceChangePercent: (((quote.c - quote.pc) / quote.pc) * 100).toFixed(2) + '%',
            }
        }
    } catch (err) {
        console.error(`[fetchStockQuote] Failed to fetch ${symbol}`, err);

        let statusCode = 500;
        let message = 'Unknown error';

        if (err instanceof Response) {
            statusCode = err.status;
            message = err.statusText;
        } else if (err instanceof Error) {
            message = err.message;
        }

        return {
            type: 'error',
            statusCode,
            message
        };
    }
}
