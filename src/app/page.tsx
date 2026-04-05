import Link from "next/link";

function DiamondIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="currentColor">
      <path d="M6 0L12 6L6 12L0 6Z" />
    </svg>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-azali-black/90 backdrop-blur-md border-b border-azali-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-[0.3em] text-azali-gold">
          AZALI
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {["Jewelry", "Diamonds", "Custom", "Melting & Assay", "Sell Gold", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+&\s+/g, "-")}`}
                className="text-xs tracking-[0.15em] uppercase text-azali-cream/70 hover:text-azali-gold transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>
        <a
          href="#contact"
          className="hidden md:block text-xs tracking-[0.15em] uppercase px-5 py-2 border border-azali-gold/40 text-azali-gold hover:bg-azali-gold hover:text-azali-black transition-all duration-300"
        >
          Visit Us
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-azali-black overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,165,90,0.06)_0%,_transparent_70%)]" />

      <div className="relative text-center px-6 max-w-4xl">
        {/* Top decorative line */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="w-20 h-px bg-azali-gold/30" />
          <DiamondIcon className="w-2.5 h-2.5 text-azali-gold/50" />
          <div className="w-20 h-px bg-azali-gold/30" />
        </div>

        {/* Brand name */}
        <h1 className="font-[family-name:var(--font-bebas-neue)] text-7xl sm:text-8xl md:text-9xl tracking-[0.4em] text-azali-gold mb-6 leading-none">
          AZALI
        </h1>

        {/* Tagline */}
        <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-azali-gold-light/80 mb-4">
          Fine Jewelry & Precious Metals
        </p>

        {/* Thin gold divider */}
        <div className="w-24 h-px bg-azali-gold/50 mx-auto mb-8" />

        {/* Subtitle */}
        <p className="text-azali-cream/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-12">
          GSI-certified diamonds, custom creations, and full-service precious
          metals — all in San Diego&apos;s Diamond District.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#jewelry"
            className="px-8 py-3 bg-azali-gold text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300"
          >
            Explore Collection
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-azali-gold/30 text-azali-gold text-xs tracking-[0.2em] uppercase hover:border-azali-gold/60 transition-colors duration-300"
          >
            Book Consultation
          </a>
        </div>

        {/* Bottom decorative */}
        <div className="flex items-center justify-center gap-4 mt-20">
          <div className="w-20 h-px bg-azali-gold/20" />
          <DiamondIcon className="w-2 h-2 text-azali-gold/30" />
          <div className="w-20 h-px bg-azali-gold/20" />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  subtitle,
  description,
  features,
  accentClass,
}: {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  accentClass: string;
}) {
  return (
    <div className="group bg-azali-charcoal/50 border border-azali-gold/10 p-8 hover:border-azali-gold/30 transition-all duration-500">
      <div className={`w-8 h-0.5 ${accentClass} mb-6`} />
      <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-[0.15em] text-azali-cream mb-1">
        {title}
      </h3>
      <p className="text-[10px] tracking-[0.25em] uppercase text-azali-gold mb-4">
        {subtitle}
      </p>
      <p className="text-azali-cream/50 text-sm leading-relaxed mb-6">
        {description}
      </p>
      <ul className="space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-azali-cream/60">
            <DiamondIcon className="w-1.5 h-1.5 text-azali-gold/60 mt-1.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Services() {
  return (
    <section id="jewelry" className="bg-azali-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.3em] uppercase text-azali-gold mb-3">
            Our Services
          </p>
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl tracking-[0.2em] text-azali-cream mb-4">
            THREE PILLARS
          </h2>
          <div className="w-16 h-px bg-azali-gold/40 mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard
            title="FINE JEWELRY"
            subtitle="Retail & Custom Design"
            description="Discover GSI-certified diamonds and handcrafted fine jewelry, or let us bring your custom vision to life."
            features={[
              "GSI-certified diamonds",
              "Custom design & bespoke creations",
              "Engagement rings & wedding bands",
              "In-store Diamond District consultations",
            ]}
            accentClass="bg-azali-gold"
          />
          <ServiceCard
            title="MELTING & ASSAY"
            subtitle="San Diego Melting & Assay"
            description="Professional precious metals processing with precise purity testing and certification, right next door."
            features={[
              "Professional melting services",
              "Accurate purity testing & certification",
              "Serving jewelers, dealers & private sellers",
              "State-of-the-art assaying equipment",
            ]}
            accentClass="bg-azali-deep-gold"
          />
          <ServiceCard
            title="GOLD ACQUISITION"
            subtitle="Precious Metals Buying"
            description="Skip the LA trip. We buy refined gold by the kilo locally with competitive pricing and same-day settlement."
            features={[
              "Buying gold by the kilo, locally",
              "No more driving to LA",
              "Accepting shipments from remote clients",
              "Same-day competitive settlement",
            ]}
            accentClass="bg-azali-gold-light"
          />
        </div>
      </div>
    </section>
  );
}

function WhyAzali() {
  return (
    <section className="bg-azali-charcoal py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-azali-gold mb-3">
          Why AZALI
        </p>
        <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl tracking-[0.15em] text-azali-cream mb-6">
          SAN DIEGO&apos;S DIAMOND DISTRICT
        </h2>
        <div className="w-16 h-px bg-azali-gold/40 mx-auto mb-10" />

        <p className="text-azali-cream/60 leading-relaxed max-w-2xl mx-auto mb-12">
          For the first time, San Diego has a full-service precious metals
          destination. From selecting a certified diamond to melting down gold
          and buying it outright — everything happens under one roof. No LA
          trips, no middlemen, no waiting.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "GSI", label: "Certified Diamonds" },
            { stat: "Same Day", label: "Settlement" },
            { stat: "Local", label: "San Diego Owned" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-wider text-azali-gold mb-1">
                {item.stat}
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-azali-cream/50">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-azali-black py-24 px-6 border-t border-azali-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-azali-gold mb-3">
          Visit Us
        </p>
        <h2 className="font-[family-name:var(--font-bebas-neue)] text-4xl sm:text-5xl tracking-[0.15em] text-azali-cream mb-6">
          DIAMOND DISTRICT, SAN DIEGO
        </h2>
        <div className="w-16 h-px bg-azali-gold/40 mx-auto mb-10" />

        <p className="text-azali-cream/50 text-sm max-w-md mx-auto mb-10 leading-relaxed">
          Walk in, call ahead, or ship your metals. We&apos;re here to serve
          jewelers, dealers, collectors, and anyone who values quality and
          trust.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:+1XXXXXXXXXX"
            className="px-8 py-3 bg-azali-gold text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300"
          >
            Call Us
          </a>
          <a
            href="mailto:info@azali.com"
            className="px-8 py-3 border border-azali-gold/30 text-azali-gold text-xs tracking-[0.2em] uppercase hover:border-azali-gold/60 transition-colors duration-300"
          >
            Email Us
          </a>
        </div>

        {/* Business hours placeholder */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-md mx-auto text-left">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-azali-gold mb-2">
              AZALI Fine Jewelry
            </p>
            <p className="text-azali-cream/40 text-sm">Diamond District</p>
            <p className="text-azali-cream/40 text-sm">San Diego, CA</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-azali-gold mb-2">
              SD Melting & Assay
            </p>
            <p className="text-azali-cream/40 text-sm">Adjacent to AZALI Retail</p>
            <p className="text-azali-cream/40 text-sm">San Diego, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-azali-black border-t border-azali-gold/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.3em] text-azali-gold/60">
          AZALI
        </p>
        <p className="text-azali-cream/30 text-xs">
          &copy; 2026 AZALI. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-azali-cream/30 hover:text-azali-gold/60 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyAzali />
      <Contact />
      <Footer />
    </main>
  );
}
