"use client";

import { Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { Analytics } from "@vercel/analytics/next";

const lora = Lora({ subsets: ["latin"] });

const generalSans = localFont({
  src: "../../public/fonts/GeneralSans-Variable.ttf",
  variable: "--font-general-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <html lang="en">
      <body className={generalSans.className}>
        {loading && <Preloader />}
        {!loading && <Navbar />}
        <main className=" mt-16">
          {children}

          <Analytics />
        </main>
        {!loading && <Footer />}
      </body>
    </html>
  );
}
