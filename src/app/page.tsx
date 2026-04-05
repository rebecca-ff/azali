import Link from "next/link";
import { DiamondIcon, FlameIcon } from "@/components/Icons";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-azali-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,90,0.06)_0%,_transparent_70%)]" />

      <div className="relative text-center px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-azali-gold/30" />
          <DiamondIcon className="w-2.5 h-2.5 text-azali-gold/50" />
          <div className="w-20 h-px bg-azali-gold/30" />
        </div>

        <h1 className="font-[family-name:var(--font-bebas-neue)] text-7xl sm:text-8xl md:text-9xl tracking-[0.4em] text-azali-gold mb-6 leading-none">
          AZALI
        </h1>

        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-azali-gold-light/80 mb-4">
          Fine Jewelry & Precious Metals
        </p>

        <div className="w-24 h-px bg-azali-gold/50 mx-auto mb-8" />

        <p className="text-azali-cream/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-12">
          Two trusted businesses in San Diego&apos;s Diamond District —
          fine jewelry and full-service precious metals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/jewelry"
            className="px-8 py-3 bg-azali-gold text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300"
          >
            Explore Jewelry
          </Link>
          <Link
            href="/melting-assay"
            className="px-8 py-3 border border-amber-500/40 text-amber-400 text-xs tracking-[0.2em] uppercase hover:bg-amber-500 hover:text-azali-black transition-all duration-300"
          >
            Melting & Assay
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="w-20 h-px bg-azali-gold/20" />
          <DiamondIcon className="w-2 h-2 text-azali-gold/30" />
          <div className="w-20 h-px bg-azali-gold/20" />
        </div>
      </div>
    </section>
  );
}

function BrandSections() {
  return (
    <section className="bg-azali-black py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* AZALI Fine Jewelry */}
        <div className="bg-azali-charcoal/30 border border-azali-gold/15 p-10">
          <DiamondIcon className="w-5 h-5 text-azali-gold/40 mb-6" />
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.2em] text-azali-gold mb-2">
            AZALI
          </h2>
          <p className="text-[10px] tracking-[0.25em] uppercase text-azali-cream/40 mb-6">
            Fine Jewelry & Custom Design
          </p>
          <p className="text-azali-cream/50 text-sm leading-relaxed mb-8">
            GSI-certified diamonds, handcrafted fine jewelry, and bespoke
            custom design. From engagement rings to statement pieces.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { href: "/jewelry", label: "Browse Collection" },
              { href: "/diamonds", label: "GSI-Certified Diamonds" },
              { href: "/custom", label: "Custom Design" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-sm text-azali-cream/50 hover:text-azali-gold transition-colors group"
              >
                <DiamondIcon className="w-1.5 h-1.5 text-azali-gold/40 group-hover:text-azali-gold transition-colors" />
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/jewelry"
            className="inline-block px-6 py-2.5 bg-azali-gold text-azali-black text-xs tracking-[0.15em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300"
          >
            Explore AZALI
          </Link>
        </div>

        {/* San Diego Melting & Assay */}
        <div className="bg-[#1a1610]/60 border border-amber-500/15 p-10">
          <FlameIcon className="w-5 h-5 text-amber-500/40 mb-6" />
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.15em] text-amber-100/60 mb-0">
            SAN DIEGO
          </h2>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.2em] text-amber-400 mb-2">
            MELTING & ASSAY
          </h2>
          <p className="text-[10px] tracking-[0.25em] uppercase text-amber-100/40 mb-6">
            Precious Metals Processing & Buying
          </p>
          <p className="text-amber-100/45 text-sm leading-relaxed mb-8">
            Professional melting, assaying, and gold buying. Sell your
            refined gold by the kilo without the LA trip.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { href: "/melting-assay", label: "Melting & Assay Services" },
              { href: "/sell-gold", label: "Sell Your Gold" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-sm text-amber-100/45 hover:text-amber-400 transition-colors group"
              >
                <FlameIcon className="w-2.5 h-2.5 text-amber-500/40 group-hover:text-amber-400 transition-colors" />
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/melting-assay"
            className="inline-block px-6 py-2.5 bg-amber-500 text-azali-black text-xs tracking-[0.15em] uppercase font-medium hover:bg-amber-400 transition-colors duration-300"
          >
            Explore SD Melting
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocationBanner() {
  return (
    <section className="bg-azali-charcoal py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-azali-gold mb-3">
          One Destination
        </p>
        <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl tracking-[0.15em] text-azali-cream mb-6">
          DIAMOND DISTRICT, SAN DIEGO
        </h2>
        <div className="w-16 h-px bg-azali-gold/40 mx-auto mb-10" />
        <p className="text-azali-cream/50 text-sm max-w-xl mx-auto leading-relaxed mb-10">
          Two businesses, side by side. Buy a certified diamond or custom
          piece at AZALI, then walk next door to melt, assay, or sell your
          precious metals at San Diego Melting &amp; Assay.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 border border-azali-gold/30 text-azali-gold text-xs tracking-[0.2em] uppercase hover:bg-azali-gold hover:text-azali-black transition-all duration-300"
        >
          Visit Us
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandSections />
      <LocationBanner />
    </main>
  );
}
