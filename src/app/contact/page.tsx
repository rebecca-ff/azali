import { DiamondIcon, FlameIcon } from "@/components/Icons";

export const metadata = {
  title: "Contact | AZALI & San Diego Melting & Assay",
  description:
    "Visit AZALI Fine Jewelry and San Diego Melting & Assay in San Diego's Diamond District. Walk-ins welcome, appointments available.",
};

export default function ContactPage() {
  return (
    <div className="bg-azali-black min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-azali-gold mb-3">
            Visit Us
          </p>
          <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl tracking-[0.15em] text-azali-cream mb-6">
            DIAMOND DISTRICT, SAN DIEGO
          </h1>
          <div className="w-20 h-px bg-azali-gold/50 mx-auto mb-8" />
          <p className="text-azali-cream/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Two businesses, one destination. Walk in, call ahead, or ship
            your metals — we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Two brand cards */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* AZALI */}
          <div className="bg-azali-charcoal/30 border border-azali-gold/15 p-10 text-center">
            <DiamondIcon className="w-5 h-5 text-azali-gold/40 mx-auto mb-5" />
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.2em] text-azali-gold mb-2">
              AZALI
            </h2>
            <p className="text-[10px] tracking-[0.2em] uppercase text-azali-cream/40 mb-8">
              Fine Jewelry & Custom Design
            </p>

            <div className="space-y-4 text-left mb-8">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-azali-gold/60 mb-1">
                  Location
                </p>
                <p className="text-azali-cream/50 text-sm">Diamond District</p>
                <p className="text-azali-cream/50 text-sm">San Diego, CA</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-azali-gold/60 mb-1">
                  Services
                </p>
                <p className="text-azali-cream/50 text-sm">
                  GSI-certified diamonds, fine jewelry, custom design,
                  engagement rings, wedding bands
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-azali-gold/60 mb-1">
                  Walk-ins
                </p>
                <p className="text-azali-cream/50 text-sm">
                  Always welcome — or book a private consultation
                </p>
              </div>
            </div>

            <a
              href="tel:+1XXXXXXXXXX"
              className="inline-block w-full px-6 py-3 bg-azali-gold text-azali-black text-xs tracking-[0.15em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300 text-center"
            >
              Call AZALI
            </a>
          </div>

          {/* SD Melting & Assay */}
          <div className="bg-[#1a1610]/60 border border-amber-500/15 p-10 text-center">
            <FlameIcon className="w-6 h-6 text-amber-500/40 mx-auto mb-5" />
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.15em] text-amber-100/60 mb-0">
              SAN DIEGO
            </h2>
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.2em] text-amber-400 mb-2">
              MELTING & ASSAY
            </h2>
            <p className="text-[10px] tracking-[0.2em] uppercase text-amber-100/40 mb-8">
              Precious Metals Processing & Buying
            </p>

            <div className="space-y-4 text-left mb-8">
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-amber-500/60 mb-1">
                  Location
                </p>
                <p className="text-amber-100/50 text-sm">
                  Adjacent to AZALI Retail
                </p>
                <p className="text-amber-100/50 text-sm">
                  Diamond District, San Diego, CA
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-amber-500/60 mb-1">
                  Services
                </p>
                <p className="text-amber-100/50 text-sm">
                  Precious metals melting, assaying, purity certification,
                  gold buying by the kilo
                </p>
              </div>
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-amber-500/60 mb-1">
                  Shipping
                </p>
                <p className="text-amber-100/50 text-sm">
                  We accept shipments from anywhere in the country
                </p>
              </div>
            </div>

            <a
              href="tel:+1XXXXXXXXXX"
              className="inline-block w-full px-6 py-3 bg-amber-500 text-azali-black text-xs tracking-[0.15em] uppercase font-medium hover:bg-amber-400 transition-colors duration-300 text-center"
            >
              Call SD Melting & Assay
            </a>
          </div>
        </div>
      </section>

      {/* Shared email */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <a
            href="mailto:info@azali.com"
            className="inline-block w-full px-8 py-3 border border-azali-gold/30 text-azali-gold text-xs tracking-[0.2em] uppercase hover:bg-azali-gold hover:text-azali-black transition-all duration-300 text-center"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-16 px-6 border-t border-azali-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-azali-charcoal/30 border border-azali-gold/10 h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-azali-cream/30 text-sm mb-2">
                Map coming soon
              </p>
              <p className="text-azali-cream/20 text-xs">
                Diamond District, San Diego, CA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
