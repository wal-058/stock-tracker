import { nunito } from "@/app/fonts";
import Link from "next/link";

export default function Header() {
    return (
        <header className={`${nunito.className} bg-white shadow-md sticky top-0 z-50 mb-10`}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-xl font-extrabold text-blue-800 text-center">
                    STOCK TRACKER
                </div>
                <nav className="flex items-center space-x-3 sm:space-x-6 text-gray-700 text-sm font-medium">
                    <Link href="/" className="hover:text-blue-600 transition-colors underline">Tracker</Link>
                    <Link href="/watchlist" className="hover:text-blue-600 transition-colors underline">Watchlist</Link>
                </nav>
            </div>
        </header>
    );
}
