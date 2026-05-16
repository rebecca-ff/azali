import Link from "next/link";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-azali-navy-deep overflow-hidden">
      {/* Subtle gold radial accent — echoes the "shaft of light" in the moodboard */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,90,0.08)_0%,_transparent_60%)]"
        aria-hidden="true"
      />

      <div className="relative text-center px-6 max-w-4xl">
        {/* AZALI / JEWELRY wordmark lockup */}
        <h1 className="font-[family-name:var(--font-cinzel)] text-7xl sm:text-8xl md:text-9xl tracking-[0.15em] text-azali-white mb-4 leading-none">
          AZALI
        </h1>
        <div className="w-24 h-px bg-azali-gold/60 mx-auto mb-3" />
        <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-azali-white/80 mb-10">
          Jewelry
        </p>

        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-azali-cream/60 mb-6">
          Fine Jewelry &amp; Precious Metals
        </p>

        <div className="w-24 h-px bg-azali-gold/60 mx-auto mb-10" />

        <p className="text-azali-cream/75 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-12">
          Two trusted businesses in San Diego&apos;s Diamond District —
          fine jewelry and full-service precious metals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/jewelry"
            className="px-8 py-3 bg-azali-gold text-azali-navy-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-bright transition-colors duration-300"
          >
            Explore Jewelry
          </Link>
          <Link
            href="/melting-assay"
            className="px-8 py-3 border border-azali-gold text-azali-gold text-xs tracking-[0.2em] uppercase hover:bg-azali-gold hover:text-azali-navy-deep transition-colors duration-300"
          >
            Melting &amp; Assay
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureMark() {
  return (
    <section
      className="relative bg-azali-navy-deep py-32 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/azali-symbol-gold-a.jpg')" }}
    >
      {/* Dark overlay so text stays legible over the imagery */}
      <div
        className="absolute inset-0 bg-azali-navy-deepest/40"
        aria-hidden="true"
      />
      <div className="relative max-w-4xl mx-auto text-center min-h-[60vh] flex flex-col justify-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-bright mb-6">
          Heritage. Craft. Brilliance.
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl tracking-[0.12em] text-azali-white mb-8">
          A FAMILY-OWNED JEWELRY HOUSE
        </h2>
        <div className="w-24 h-px bg-azali-gold mx-auto mb-8" />
        <p className="text-azali-cream/85 text-base max-w-xl mx-auto leading-relaxed">
          From GIA-certified diamonds to bespoke custom pieces, AZALI is
          built on generations of jewelry expertise — quietly setting the
          standard in San Diego&apos;s Diamond District.
        </p>
      </div>
    </section>
  );
}

function BrandSections() {
  return (
    <section className="bg-azali-navy py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* AZALI Fine Jewelry */}
        <div className="bg-azali-navy-elevated border border-azali-gold/20 p-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold mb-6">
            AZALI
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl tracking-[0.15em] text-azali-white mb-3">
            FINE JEWELRY
          </h2>
          <div className="w-12 h-px bg-azali-gold/60 mb-6" />
          <p className="text-azali-cream/70 text-sm leading-relaxed mb-8">
            GIA-certified diamonds, handcrafted fine jewelry, and bespoke
            custom design. From engagement rings to statement pieces.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { href: "/jewelry", label: "Browse Collection" },
              { href: "/diamonds", label: "GIA-Certified Diamonds" },
              { href: "/custom", label: "Custom Design" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-sm text-azali-cream/70 hover:text-azali-white transition-colors"
              >
                <span className="w-4 h-px bg-azali-gold/60" />
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/jewelry"
            className="inline-block px-6 py-2.5 bg-azali-gold text-azali-navy-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-bright transition-colors duration-300"
          >
            Explore AZALI
          </Link>
        </div>

        {/* San Diego Melting & Assay */}
        <div className="bg-azali-foundry-elevated border border-azali-gold-bright/30 p-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-bright mb-6">
            SAN DIEGO
          </p>
          <h2 className="font-[family-name:var(--font-cinzel)] text-3xl tracking-[0.15em] text-azali-gold-bright mb-3">
            MELTING &amp; ASSAY
          </h2>
          <div className="w-12 h-px bg-azali-gold-bright mb-6" />
          <p className="text-azali-cream/70 text-sm leading-relaxed mb-8">
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
                className="flex items-center gap-3 text-sm text-azali-cream/70 hover:text-azali-gold-bright transition-colors"
              >
                <span className="w-4 h-px bg-azali-gold-bright" />
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/melting-assay"
            className="inline-block px-6 py-2.5 bg-azali-gold-bright text-azali-foundry text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold transition-colors duration-300"
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
    <section className="bg-azali-navy-deep py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-bright mb-4">
          One Destination
        </p>
        <h2 className="font-[family-name:var(--font-cinzel)] text-4xl sm:text-5xl tracking-[0.12em] text-azali-white mb-6">
          DIAMOND DISTRICT, SAN DIEGO
        </h2>
        <div className="w-24 h-px bg-azali-gold/60 mx-auto mb-10" />
        <p className="text-azali-cream/70 text-sm max-w-xl mx-auto leading-relaxed mb-10">
          Two businesses, side by side. Buy a certified diamond or custom
          piece at AZALI, then walk next door to melt, assay, or sell your
          precious metals at San Diego Melting &amp; Assay.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 border border-azali-gold text-azali-gold text-xs tracking-[0.2em] uppercase hover:bg-azali-gold hover:text-azali-navy-deep transition-colors duration-300"
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
      <FeatureMark />
      <BrandSections />
      <LocationBanner />
    </main>
  );
}
