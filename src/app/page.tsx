import Link from "next/link";
import CustomCADStudio from "@/components/CustomCADStudio";

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-azali-navy-deep overflow-hidden">
      {/* Hero banner video — close-up panning b-roll of jewelry on navy */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/azali-hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/azali-hero-banner.mp4" type="video/mp4" />
      </video>

      {/* Strong tint overlay — keeps all overlaid text legible */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-azali-navy-deep/80 via-azali-navy-deep/30 to-azali-navy-deep/95"
        aria-hidden="true"
      />

      {/* Top wordmark — sits below the navbar */}
      <div className="relative z-10 pt-32 sm:pt-36 text-center px-6">
        <h1 className="font-[family-name:var(--font-italiana)] text-6xl sm:text-7xl md:text-8xl tracking-[0.25em] text-azali-white leading-none">
          AZALI
        </h1>
        <div className="w-20 h-px bg-azali-gold/70 mx-auto mt-4 mb-2" />
        <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-azali-white/80">
          Jewelry
        </p>
      </div>

      {/* Bottom-anchored content — eyebrow, tagline, CTAs */}
      <div className="relative z-10 mt-auto pb-16 sm:pb-20 px-6 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-azali-white mb-4">
          Fine Jewelry &amp; Precious Metals
        </p>
        <div className="w-16 h-px bg-azali-gold mx-auto mb-6" />
        <p className="text-azali-white/95 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
          Two trusted businesses at the Jewelers Exchange in Downtown San Diego —
          fine jewelry and full-service precious metals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#design-studio"
            className="px-8 py-3 bg-azali-gold text-azali-navy-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-bright transition-colors duration-300"
          >
            Design Your Piece
          </Link>
          <Link
            href="/jewelry"
            className="px-8 py-3 border border-azali-white text-azali-white text-xs tracking-[0.2em] uppercase hover:bg-azali-white hover:text-azali-navy-deep transition-colors duration-300"
          >
            Explore Jewelry
          </Link>
          <Link
            href="/melting-assay"
            className="px-8 py-3 border border-azali-white text-azali-white text-xs tracking-[0.2em] uppercase hover:bg-azali-white hover:text-azali-navy-deep transition-colors duration-300"
          >
            Melting &amp; Assay
          </Link>
        </div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section className="bg-azali-navy-deepest py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy — left on desktop, below emblem on mobile */}
        <div className="order-2 md:order-1">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold-bright mb-6">
            Heritage. Craft. Brilliance.
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-4xl sm:text-5xl tracking-[0.12em] text-azali-white mb-8 leading-tight">
            A FAMILY-OWNED <br />JEWELRY HOUSE
          </h2>
          <div className="w-24 h-px bg-azali-gold mb-8" />
          <p className="text-azali-white/85 text-base leading-relaxed">
            From GIA-certified diamonds to bespoke custom pieces, AZALI is
            built on generations of jewelry expertise — quietly setting the
            standard at the Jewelers Exchange in Downtown San Diego.
          </p>
        </div>

        {/* Rotating gold-A monogram — full square, no cropping */}
        <div className="order-1 md:order-2 aspect-square w-full max-w-md md:max-w-lg mx-auto">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/azali-symbol-mark.jpg"
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source src="/azali-logo-reveal.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

function BrandSections() {
  return (
    <section className="bg-azali-navy py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* AZALI Fine Jewelry — bright white card on navy */}
        <div className="bg-azali-white border border-azali-gold/40 p-10">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold-deep mb-6">
            AZALI
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-3xl tracking-[0.15em] text-azali-navy-deep mb-3">
            FINE JEWELRY
          </h2>
          <div className="w-12 h-px bg-azali-gold mb-6" />
          <p className="text-azali-navy-deep/80 text-sm leading-relaxed mb-8">
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
                className="flex items-center gap-3 text-sm text-azali-navy-deep/80 hover:text-azali-navy-deep transition-colors"
              >
                <span className="w-4 h-px bg-azali-gold" />
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/jewelry"
            className="inline-block px-6 py-2.5 bg-azali-navy-deep text-azali-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-navy transition-colors duration-300"
          >
            Explore AZALI
          </Link>
        </div>

        {/* San Diego Melting & Assay — white card on navy, ember accents */}
        <div className="bg-azali-white border border-azali-ember/50 p-10">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-ember-deep mb-6">
            SAN DIEGO
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl tracking-[0.15em] text-azali-ember-deep mb-3">
            MELTING &amp; ASSAY
          </h2>
          <div className="w-12 h-px bg-azali-ember-deep mb-6" />
          <p className="text-azali-navy-deep/80 text-sm leading-relaxed mb-8">
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
                className="flex items-center gap-3 text-sm text-azali-navy-deep/80 hover:text-azali-ember-deep transition-colors"
              >
                <span className="w-4 h-px bg-azali-ember-deep" />
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/melting-assay"
            className="inline-block px-6 py-2.5 bg-azali-ember-deep text-azali-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-ember transition-colors duration-300"
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
        <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold-bright mb-4">
          One Destination
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-4xl sm:text-5xl tracking-[0.12em] text-azali-white mb-6">
          JEWELERS EXCHANGE, DOWNTOWN SAN DIEGO
        </h2>
        <div className="w-24 h-px bg-azali-gold/70 mx-auto mb-10" />
        <p className="text-azali-white/80 text-sm max-w-xl mx-auto leading-relaxed mb-10">
          Two businesses, side by side. Buy a certified diamond or custom
          piece at AZALI, then walk next door to melt, assay, or sell your
          precious metals at San Diego Melting &amp; Assay.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-azali-gold text-azali-navy-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-bright transition-colors duration-300"
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
      <Heritage />
      <CustomCADStudio />
      <BrandSections />
      <LocationBanner />
    </main>
  );
}
