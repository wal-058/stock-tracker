export const createKey = (symbols: string | string[]): string => {
    return Array.isArray(symbols) ? symbols.join('') : symbols;
}