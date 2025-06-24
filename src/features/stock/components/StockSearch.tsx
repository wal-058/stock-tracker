interface StockSearchBarProps {
    value: string;
    onChange: (val: string) => void;
    onSubmit: () => void;
}

export default function StockSearchBar({ value, onChange, onSubmit }: StockSearchBarProps) {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleFormSubmit} className="flex items-center gap-2 mb-6">
            <input
                type="text"
                placeholder="Search stock (e.g. AAPL, Tesla)"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-800 focus:border-blue-800"
            />
            <button
                type="submit"
                className="px-4 py-2 text-sm h-10 bg-blue-800 text-white rounded-md hover:bg-blue-900 hover:cursor-pointer transition-colors duration-200"
            >
                SEARCH
            </button>
        </form>
    );
}
