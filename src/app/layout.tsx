import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB",
  description: "IMDB Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-slate-500"}>
        {/* Header */}
        <Header />
        {/* Navbar */}

        {/* Seach Box */}
        {children}
      </body>
    </html>
  );
}
