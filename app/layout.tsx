import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WatchlistProvider } from "@/context/WatchlistContext";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "DiLa TV | Stream without limits",
  description:
    "DiLa TV brings cinematic streaming home with a curated catalog of films, series, and documentaries tailored to every mood.",
  metadataBase: new URL("https://dilatv.local")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.className} bg-background text-white`}> 
        <WatchlistProvider>
          <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(99,144,255,0.25),_transparent_60%)]">
            <div className="pointer-events-none absolute inset-0 bg-dila-gradient opacity-70 mix-blend-screen" />
            <div className="relative z-10 flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 pb-20">{children}</main>
              <Footer />
            </div>
          </div>
        </WatchlistProvider>
      </body>
    </html>
  );
}
