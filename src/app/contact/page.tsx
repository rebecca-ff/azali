export const metadata = {
  title: "Contact | AZALI & San Diego Melting & Assay",
  description:
    "Visit AZALI Fine Jewelry and San Diego Melting & Assay in San Diego's Diamond District. Walk-ins welcome, appointments available.",
};

export default function ContactPage() {
  return (
    <div className="bg-azali-navy min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-azali-navy-deep">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold mb-3">
            Visit Us
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[0.12em] text-azali-white mb-6">
            DIAMOND DISTRICT, SAN DIEGO
          </h1>
          <div className="w-24 h-px bg-azali-gold/70 mx-auto mb-8" />
          <p className="text-azali-white/80 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Two businesses, one destination. Walk in, call ahead, or ship
            your metals — we&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Two brand cards — bright on navy */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* AZALI — white card */}
          <div className="bg-azali-white border border-azali-gold/40 p-10 text-center">
            <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold-deep mb-3">
              AZALI
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-3xl tracking-[0.15em] text-azali-navy-deep mb-2">
              FINE JEWELRY
            </h2>
            <div className="w-12 h-px bg-azali-gold mx-auto mb-8" />

            <div className="space-y-5 text-left mb-8">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-deep mb-1">
                  Location
                </p>
                <p className="text-azali-navy-deep/85 text-sm">
                  Diamond District
                </p>
                <p className="text-azali-navy-deep/85 text-sm">
                  San Diego, CA
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-deep mb-1">
                  Services
                </p>
                <p className="text-azali-navy-deep/85 text-sm leading-relaxed">
                  GIA-certified diamonds, fine jewelry, custom design,
                  engagement rings, wedding bands
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-deep mb-1">
                  Walk-ins
                </p>
                <p className="text-azali-navy-deep/85 text-sm">
                  Always welcome — or book a private consultation
                </p>
              </div>
            </div>

            <a
              href="tel:+1XXXXXXXXXX"
              className="inline-block w-full px-6 py-3 bg-azali-navy-deep text-azali-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-navy transition-colors duration-300 text-center"
            >
              Call AZALI
            </a>
          </div>

          {/* SD Melting & Assay — warm cream card */}
          <div className="bg-[#F4EFE0] border border-azali-gold-bright/50 p-10 text-center">
            <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold-deep mb-3">
              SAN DIEGO
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-3xl tracking-[0.15em] text-azali-gold-deep mb-2">
              MELTING &amp; ASSAY
            </h2>
            <div className="w-12 h-px bg-azali-gold-deep mx-auto mb-8" />

            <div className="space-y-5 text-left mb-8">
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-deep mb-1">
                  Location
                </p>
                <p className="text-azali-navy-deep/85 text-sm">
                  Adjacent to AZALI Retail
                </p>
                <p className="text-azali-navy-deep/85 text-sm">
                  Diamond District, San Diego, CA
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-deep mb-1">
                  Services
                </p>
                <p className="text-azali-navy-deep/85 text-sm leading-relaxed">
                  Precious metals melting, assaying, purity certification,
                  gold buying by the kilo
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold-deep mb-1">
                  Shipping
                </p>
                <p className="text-azali-navy-deep/85 text-sm">
                  We accept shipments from anywhere in the country
                </p>
              </div>
            </div>

            <a
              href="tel:+1XXXXXXXXXX"
              className="inline-block w-full px-6 py-3 bg-azali-gold-deep text-azali-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold transition-colors duration-300 text-center"
            >
              Call SD Melting &amp; Assay
            </a>
          </div>
        </div>
      </section>

      {/* Shared email */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <a
            href="mailto:info@azali.com"
            className="inline-block w-full px-8 py-3 border border-azali-gold text-azali-gold text-xs tracking-[0.2em] uppercase hover:bg-azali-gold hover:text-azali-navy-deep transition-colors duration-300 text-center"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* Map placeholder — bright on navy */}
      <section className="py-16 px-6 bg-azali-navy-deep">
        <div className="max-w-4xl mx-auto">
          <div className="bg-azali-white border border-azali-gold/40 h-64 flex items-center justify-center">
            <div className="text-center">
              <p className="text-azali-navy-deep/80 text-sm mb-2">
                Map coming soon
              </p>
              <p className="text-azali-stone text-xs tracking-[0.2em] uppercase">
                Diamond District, San Diego, CA
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
