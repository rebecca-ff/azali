import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import AzaliNavbar from "@/components/AzaliNavbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AZALI | Fine Jewelry & Precious Metals | San Diego",
  description:
    "GSI-certified diamonds, custom jewelry, precious metals melting & assay, and gold acquisition in San Diego's Diamond District.",
  keywords: [
    "jewelry",
    "diamonds",
    "GSI certified",
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
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AzaliNavbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
