"use client"

import { geistMono, geistSans } from "@/app/fonts"
import Waitlist from "@/features/waitlist"

interface UpgradeNoticeProps {
    symbol?: string
}

export default function UpgradeNotice({ symbol }: UpgradeNoticeProps) {
    return (
        <div className="h-[calc(77.9vh)] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
            <div className="relative max-w-2xl w-full flex-1">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">

                    <div className="text-center mb-6">
                        <h1 className={`${geistSans.className} text-2xl font-bold text-white mb-2`}>
                            Unlock Premium Data
                        </h1>
                        <p className={`${geistMono.className} text-base text-slate-300`}>
                            Access detailed stock data for{" "}
                            {symbol ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-blue-300 font-bold">
                                    {symbol}
                                </span>
                            ) : (
                                <span className="text-white font-semibold">your favorite stocks</span>
                            )}
                        </p>
                        <p className="text-slate-400 mt-1 text-sm">
                            and thousands more with a premium subscription.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {[
                            { title: "Real-time Data" },
                            { title: "Advanced Charts" },
                            { title: "Price Alerts" },
                            { title: "Mobile Access" },
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition"
                            >
                                <span className={`${geistMono.className} text-white`}>{f.title}</span>
                            </div>
                        ))}
                    </div>

                    <Waitlist />

                </div>
            </div>
        </div>
    )
}
