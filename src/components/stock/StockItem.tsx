"use client"

import { geistMono } from "@/app/fonts"
import type { StockItem } from "@/types/stock"

interface StockItemProps {
    stock: StockItem
    onToggleWatchlist: (symbol: string) => void
    isWatched: boolean
}

export default function StockItemDisplay({ stock, onToggleWatchlist, isWatched }: StockItemProps) {
    const { symbol, latestPrice, priceChange, priceChangePercent } = stock

    const isPositive = Number.parseFloat(priceChange) >= 0
    const changeColor = isPositive ? "text-emerald-400" : "text-red-400"
    const changeBgColor = isPositive ? "bg-emerald-500/10" : "bg-red-500/10"
    const changeBorderColor = isPositive ? "border-emerald-500/20" : "border-red-500/20"

    return (
        <div
            className={`${geistMono.className} w-[90vw] max-w-3xl group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-1">{symbol}</h2>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${isPositive ? "bg-emerald-400" : "bg-red-400"}`}></div>
                            <span className="text-slate-400 text-sm">Price Change</span>
                        </div>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-2xl font-bold text-white mb-1">${latestPrice}</p>
                    <div
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border ${changeBgColor} ${changeBorderColor} ${changeColor}`}
                    >
                        <span>
                            {isPositive ? "+" : ""}
                            {priceChange}
                        </span>
                        <span>({priceChangePercent})</span>
                    </div>
                </div>
            </div>

            <div className="relative flex items-center gap-4 justify-between pt-4 border-t border-white/10">
                <button
                    onClick={() => onToggleWatchlist(symbol)}
                    className={`hover:cursor-pointer w-full text-center group/btn flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${isWatched
                        ? "bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30 hover:border-red-500/50"
                        : "bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-500/50"
                        }`}
                >
                    <span>{isWatched ? "Remove" : "Add to Watchlist"}</span>
                </button>
            </div>

            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    )
}
