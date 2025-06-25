"use client"

import { geistMono } from "@/app/fonts"
import type { StockSearchResult } from "../types"
import Link from "next/link"

interface StockSearchResultProps {
    stockSearchResult: StockSearchResult
}

export default function SearchResultItemDisplay({ stockSearchResult }: StockSearchResultProps) {
    const { name, symbol } = stockSearchResult

    return (
        <Link href={`/stocks/${symbol}`} passHref target="_blank">
            <div
                className={`${geistMono.className} w-[90vw] max-w-3xl group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer`}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                        {/* Symbol and Name in one block, direction switches by breakpoint */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                            <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                                {symbol}
                            </h2>
                            <div className="hidden sm:block w-2 h-2 bg-slate-500 rounded-full"></div>
                            <p className="text-slate-300 font-medium truncate group-hover:text-slate-200 transition-colors duration-300">
                                {name}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <p>&gt;</p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
        </Link>
    )
}
