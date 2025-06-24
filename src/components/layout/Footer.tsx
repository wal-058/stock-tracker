export default function Footer() {
    return (
        <footer className="absolute w-screen bottom-0 bg-white border-t mt-10 py-6 flex items-center justify-center">
            <div className="w-[90vw] mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <p className="mb-2 md:mb-0">
                    &copy; {new Date().getFullYear()} Stock Tracker by Waleed Ahmed.
                </p>
                <div className="flex space-x-4">
                    <a href="/about" className="hover:text-blue-800 transition-colors">About</a>
                    <a href="https://github.com/wal-058/stock-tracker" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition-colors">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}
