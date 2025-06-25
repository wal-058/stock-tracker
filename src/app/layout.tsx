import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { geistMono, geistSans } from "./fonts";

export const metadata: Metadata = {
  title: "Stock Tracker",
  description: "A stock tracking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} ${geistMono.className} antialiased min-h-screen flex flex-col bg-blue-100`}
      >
        <Header />
        <main className="flex-1 h-[calc(100vh - 8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
