import { Montserrat, Roboto, Inter, Nunito, Geist, Geist_Mono } from 'next/font/google';

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-montserrat',
});

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-roboto',
});

export const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inter',
});

export const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
});


export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
