'use client'

import { Roboto_Mono, Nunito, Inter, Geist, Geist_Mono, Montserrat } from "next/font/google";

export const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const nunito = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
});

export const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});
