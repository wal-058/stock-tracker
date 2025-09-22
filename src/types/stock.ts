export interface StockItem {
    symbol: string,
    openPrice: string,
    highPrice: string,
    lowPrice: string,
    latestPrice: string,
    volume: string,
    lastestTradingDay: string,
    previousClosePrice: string,
    priceChange: string,
    priceChangePercent: string,
}

export type FetchQuoteResult =
    | { type: 'success', quote: StockItem, }
    | { type: 'error', statusCode: number, message: string }