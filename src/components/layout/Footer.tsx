import Image from "next/image"
export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-t from-slate-900 via-slate-800/95 to-slate-900/90 border-t border-white/10">
            {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.08),transparent_70%)]"></div> */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

            <div className="relative max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <p className="text-slate-300 text-sm font-medium">
                            &copy; {new Date().getFullYear()} Stock Tracker by{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                                Waleed Ahmed
                            </span>
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                            <a
                                href="https://www.linkedin.com/in/waleed-ahmed-b9156622b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/30 rounded-lg transition-all duration-300 backdrop-blur-sm"
                            >
                                <Image
                                    src="/logos/InBug-White.png"
                                    alt="LinkedIn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <span className="text-slate-300 group-hover:text-white text-sm font-medium transition-colors">
                                    LinkedIn
                                </span>
                            </a>

                            <a
                                href="https://github.com/wal-058/stock-tracker"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/30 rounded-lg transition-all duration-300 backdrop-blur-sm"
                            >
                                <Image
                                    src="/logos/github-mark-white.png"
                                    alt="LinkedIn Logo"
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                                <span className="text-slate-300 group-hover:text-white text-sm font-medium transition-colors">
                                    GitHub
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
