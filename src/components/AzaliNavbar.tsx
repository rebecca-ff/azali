"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`group relative text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
        active
          ? "text-azali-navy-deep"
          : "text-azali-navy/70 hover:text-azali-navy-deep"
      }`}
    >
      {children}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-azali-gold transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function AzaliNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const azaliLinks = [
    { href: "/jewelry", label: "Jewelry" },
    { href: "/diamonds", label: "Diamonds" },
    { href: "/custom", label: "Custom" },
  ];

  const sdmaLinks = [
    { href: "/melting-assay", label: "Melting & Assay" },
    { href: "/sell-gold", label: "Sell Gold" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-azali-gold/30 transition-colors duration-300 ${
        scrolled
          ? "bg-azali-marble-white/85 backdrop-blur-sm"
          : "bg-azali-marble-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* AZALI logo lockup */}
        <Link href="/" className="flex flex-col items-start leading-none">
          <span className="font-[family-name:var(--font-cinzel)] text-2xl tracking-[0.15em] text-azali-navy">
            AZALI
          </span>
          <span className="w-8 h-px bg-azali-gold/40 my-1" />
          <span className="text-[9px] tracking-[0.4em] uppercase text-azali-navy/80">
            Jewelry
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {azaliLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}

          <span className="w-px h-4 bg-azali-gold/30" />

          {sdmaLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}

          <span className="w-px h-4 bg-azali-gold/30" />

          <NavLink href="/contact" active={pathname === "/contact"}>
            Contact
          </NavLink>
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block text-xs tracking-[0.2em] uppercase font-medium px-6 py-2.5 bg-azali-navy text-azali-marble-white hover:bg-azali-navy-deep transition-colors duration-300"
        >
          Visit Us
        </Link>
      </div>
    </nav>
  );
}
