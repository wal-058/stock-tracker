
import { geistMono } from "@/app/fonts";
import { StockItem } from "@/types/stock";

interface StockItemProps {
    stock: StockItem;
    onToggleWatchlist: (symbol: string) => void;
    isWatched: boolean;
}
export default function StockItemDisplay({ stock, onToggleWatchlist, isWatched }: StockItemProps) {
    const {
        symbol,
        latestPrice,
        priceChange,
        priceChangePercent,
    } = stock;

    const isPositive = parseFloat(priceChange) >= 0;

    return (
        <div className={`${geistMono.className} w-[90vw] max-w-3xl bg-white border border-gray-200 rounded-lg p-4 m-4 hover:border-blue-800 duration-100`}>
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold text-gray-800">{symbol}</h2>
                <p className="text-xl font-bold text-gray-900">${latestPrice}</p>
            </div>
            <div className="text-sm flex justify-between">
                <span className={isPositive ? "text-green-600" : "text-red-600"}>
                    {isPositive ? "+" : ""}
                    {priceChange} ({priceChangePercent})
                </span>
                <button className="text-blue-800 underline hover:cursor-pointer"
                    onClick={() => onToggleWatchlist(symbol)}
                >
                    {isWatched ? 'Remove from Watchlist' : 'Add to Watchlist'}
                </button>
            </div>
        </div>
    );

}