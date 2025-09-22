
interface WaitlistViewProps {
    handleJoinWaitlist: () => void;
    value: string;
    handleInputChange: (value: string) => void;
}

export default function WaitlistView({ handleJoinWaitlist, value, handleInputChange }: WaitlistViewProps) {

    return (
        <div className="grid grid-cols-1 gap-3">
            <div className="border rounded-lg border-white/20 bg-white/5">
                <input
                    type="email"
                    onChange={(e) => handleInputChange(e.target.value)}
                    value={value}
                    className="w-full pl-6 sm:pl-16 pr-6 py-4 bg-transparent text-white placeholder-slate-400 text-lg font-medium focus:outline-none focus:ring-0 border-none rounded-lg overflow-hidden"
                    placeholder="john@example.com"
                />
            </div>

            <button onClick={() => handleJoinWaitlist()} className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded text-white font-bold text-base shadow hover:brightness-110 transition hover:cursor-pointer">
                Join Waitlist
            </button>

        </div>
    )
}