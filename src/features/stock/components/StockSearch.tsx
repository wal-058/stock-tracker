interface StockSearchBarProps {
    value: string;
    onChange: (val: string) => void;
    // onSubmit: () => void;
}

export default function StockSearchBar({ value, onChange }: StockSearchBarProps) {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // onSubmit();
    };

    return (
        <form onSubmit={handleFormSubmit}
            className="flex items-center justify-center gap-2 mb-6 w-[90vw] max-w-3xl relative bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl"
        >
            <input
                type="text"
                placeholder="Search stock (e.g. AAPL, Tesla)"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full pl-6 sm:pl-16 pr-6 py-4 bg-transparent text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-0 border-none"
            />
        </form>
    );
}
