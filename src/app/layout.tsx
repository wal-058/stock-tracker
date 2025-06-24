import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
