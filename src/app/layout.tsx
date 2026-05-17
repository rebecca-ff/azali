import type { Metadata } from "next";
import { Inter, Italiana, Playfair_Display } from "next/font/google";
import "./globals.css";
import AzaliNavbar from "@/components/AzaliNavbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZALI | Fine Jewelry · Precious Metals Buying, Melting & Assay | Downtown San Diego",
  description:
    "GIA-certified diamonds, custom jewelry, precious metals melting & assay, and gold acquisition at the Jewelers Exchange in Downtown San Diego.",
  keywords: [
    "jewelry",
    "diamonds",
    "GIA certified",
    "custom jewelry",
    "gold melting",
    "assay",
    "precious metals",
    "San Diego",
    "Downtown San Diego",
    "Jewelers Exchange",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${italiana.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-azali-navy text-azali-cream">
        <AzaliNavbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
