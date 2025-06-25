import Stat from "@/components/ui/Stat";
import { fetchStockQuote } from "@/libs/fetchStockQuote"
import { notFound } from "next/navigation"

export const revalidate = 300;

export default async function StockDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const stock = await fetchStockQuote(slug)
    if (!stock) return notFound()

    const isPositive = parseFloat(stock.priceChange) >= 0
    const changeColor = isPositive ? "text-green-500" : "text-red-500"

    return (
        <div className="min-h-screen px-6 py-10 bg-slate-900 text-white">
            <div className="max-w-3xl mx-auto space-y-10">
                <div>
                    <h1 className="text-4xl font-bold mb-2">{stock.symbol}</h1>
                    <p className="text-slate-400 text-sm">Stock Quote Detail</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Stat label="Current" value={stock.latestPrice}
                        extra={
                            <p className={`text-sm font-medium ${changeColor}`}>
                                {isPositive ? "+" : ""}
                                {stock.priceChange} ({stock.priceChangePercent})
                            </p>
                        }
                        fullWidth
                    />
                    <Stat label="Open" value={stock.openPrice} />
                    <Stat label="High" value={stock.highPrice} />
                    <Stat label="Low" value={stock.lowPrice} />
                    <Stat label="Prev Close" value={stock.previousClosePrice} />
                    <Stat label="Last Trading Day" value={stock.lastestTradingDay} isRaw />
                </div>
            </div>
        </div>
    )
}
