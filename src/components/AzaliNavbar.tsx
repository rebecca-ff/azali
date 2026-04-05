"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DiamondIcon } from "./Icons";

export default function AzaliNavbar() {
  const pathname = usePathname();

  const azaliLinks = [
    { href: "/jewelry", label: "Jewelry" },
    { href: "/diamonds", label: "Diamonds" },
    { href: "/custom", label: "Custom" },
  ];

  const sdmaLinks = [
    { href: "/melting-assay", label: "Melting & Assay" },
    { href: "/sell-gold", label: "Sell Gold" },
  ];

  const isSDMA = pathname === "/melting-assay" || pathname === "/sell-gold";

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        isSDMA
          ? "bg-[#1a1610]/90 border-amber-500/10"
          : "bg-azali-black/90 border-azali-gold/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand logo — switches based on section */}
        {isSDMA ? (
          <Link
            href="/"
            className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.15em] text-amber-400"
          >
            SD MELTING & ASSAY
          </Link>
        ) : (
          <Link
            href="/"
            className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-[0.3em] text-azali-gold"
          >
            AZALI
          </Link>
        )}

        <div className="hidden md:flex items-center gap-8">
          {/* AZALI links */}
          {azaliLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-azali-gold"
                  : "text-azali-cream/50 hover:text-azali-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <span className="w-px h-4 bg-azali-gold/20" />

          {/* SDMA links */}
          {sdmaLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                pathname === link.href
                  ? "text-amber-400"
                  : "text-azali-cream/50 hover:text-amber-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <span className="w-px h-4 bg-azali-gold/20" />

          <Link
            href="/contact"
            className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
              pathname === "/contact"
                ? "text-azali-gold"
                : "text-azali-cream/50 hover:text-azali-gold"
            }`}
          >
            Contact
          </Link>
        </div>

        <Link
          href="/contact"
          className={`hidden md:block text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-300 ${
            isSDMA
              ? "border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-azali-black"
              : "border-azali-gold/40 text-azali-gold hover:bg-azali-gold hover:text-azali-black"
          }`}
        >
          Visit Us
        </Link>
      </div>
    </nav>
  );
}
