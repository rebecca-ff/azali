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
          ? "text-azali-white"
          : "text-azali-cream/70 hover:text-azali-white"
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
    { href: "/#design-studio", label: "Design Studio" },
  ];

  const sdmaLinks = [
    { href: "/melting-assay", label: "Melting & Assay" },
    { href: "/sell-gold", label: "Sell Gold" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-azali-gold/20 transition-colors duration-300 ${
        scrolled
          ? "bg-azali-navy-deep/85 backdrop-blur-md"
          : "bg-azali-navy-deep"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* AZALI wordmark lockup */}
        <Link
          href="/"
          className="flex flex-col items-start leading-none"
          aria-label="AZALI Jewelry"
        >
          <span className="font-[family-name:var(--font-italiana)] text-2xl tracking-[0.25em] text-azali-white">
            AZALI
          </span>
          <span className="w-10 h-px bg-azali-gold/60 mt-1.5 mb-1" />
          <span className="text-[9px] tracking-[0.5em] uppercase text-azali-white/70">
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
          className="hidden md:inline-block text-xs tracking-[0.2em] uppercase font-medium px-6 py-2.5 bg-azali-gold text-azali-navy-deep hover:bg-azali-gold-bright transition-colors duration-300"
        >
          Visit Us
        </Link>
      </div>
    </nav>
  );
}
