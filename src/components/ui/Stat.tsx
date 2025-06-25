import React from "react"

interface StatProps {
    label: string
    value: string
    isRaw?: boolean
    extra?: React.ReactNode
    fullWidth?: boolean
}

export default function Stat({
    label,
    value,
    isRaw = false,
    extra,
    fullWidth = false,
}: StatProps) {
    return (
        <div
            className={`p-4 bg-slate-800 rounded-lg border border-slate-700 ${fullWidth ? "sm:col-span-2" : ""
                }`}
        >
            <h3 className="text-slate-400 text-xs uppercase tracking-wide mb-1">{label}</h3>
            <p className="text-xl font-semibold">{isRaw ? value : `$${value}`}</p>
            {extra && <div className="mt-1">{extra}</div>}
        </div>
    )
}
