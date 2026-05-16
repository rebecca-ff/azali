import type { Metadata } from "next";
import { Inter, Italiana } from "next/font/google";
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

export const metadata: Metadata = {
  title: "AZALI | Fine Jewelry & Precious Metals | San Diego",
  description:
    "GIA-certified diamonds, custom jewelry, precious metals melting & assay, and gold acquisition in San Diego's Diamond District.",
  keywords: [
    "jewelry",
    "diamonds",
    "GIA certified",
    "custom jewelry",
    "gold melting",
    "assay",
    "precious metals",
    "San Diego",
    "Diamond District",
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
      className={`${inter.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-azali-navy text-azali-cream">
        <AzaliNavbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
