import { nunito } from "@/app/fonts"
import Link from "next/link"

export default function Header() {
    return (
        <header
            className={`${nunito.className} bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 shadow-2xl`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_70%)]"></div>
            <div className="relative max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center gap-3 hover:bg-white/5 rounded-lg">
                    <Link href="/">
                        <div className="my-2 sm:my-0 px-4 py-2 text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent 
                            rounded-lg transition-all duration-300 backdrop-blur-sm"
                        >
                            STOCK TRACKER
                        </div>
                    </Link>
                </div>

                <nav className="flex items-center space-x-1">
                    <Link href="/"
                        className="px-4 py-2 text-slate-300 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 backdrop-blur-sm"
                    >
                        Tracker
                    </Link>
                    <Link href="/watchlist"
                        className="px-4 py-2 text-slate-300 hover:text-white font-medium rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/20 backdrop-blur-sm"
                    >
                        Watchlist
                    </Link>
                </nav>
            </div>
        </header>
    )
}
