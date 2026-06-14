import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Adarsh Raj S | Freelance Web Developer from Kozhikode",
  description: "Ultra-modern, high-performance portfolio of Adarsh Raj S, a freelance web developer based in Kozhikode, Kerala, India.",
  keywords: ["Web Developer", "Next.js Portfolio", "Freelance Developer Kerala", "Kozhikode", "Adarsh Raj"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Native injection of performance optimizations & premium structural tweaks */}
        <style>{`
          body {
            background-color: #0b0f19;
            color: #f3f4f6;
          }
          /* Hardware accelerated custom webkit configurations for ultra-smooth UI feel */
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #0b0f19;
          }
          ::-webkit-scrollbar-thumb {
            background: #1f2937;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #3b82f6;
          }
        `}</style>
      </head>
      <body className={`${inter.className} antialiased overflow-x-hidden min-h-screen bg-[#0b0f19] text-[#f3f4f6]`}>
        {children}
      </body>
    </html>
  );
}