import { DiamondIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "GSI-Certified Diamonds | AZALI | San Diego",
  description:
    "Every diamond at AZALI is independently certified by the Gemological Science International lab. Browse our selection or source your perfect stone.",
};

export default function DiamondsPage() {
  const qualities = [
    {
      title: "Cut",
      desc: "The precision of the cut determines how brilliantly a diamond sparkles. We carry Excellent and Ideal cuts exclusively.",
    },
    {
      title: "Color",
      desc: "From icy colorless to warm near-colorless, every stone is graded on the GSI scale so you know exactly what you're selecting.",
    },
    {
      title: "Clarity",
      desc: "Our experts hand-select diamonds with minimal inclusions, ensuring exceptional brilliance and fire.",
    },
    {
      title: "Carat",
      desc: "Whether you want understated elegance or show-stopping presence, we source stones across the full carat range.",
    },
  ];

  return (
    <div className="bg-azali-black min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.3em] text-azali-gold/60 mb-2">
            AZALI
          </p>
          <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl tracking-[0.2em] text-azali-cream mb-6">
            GSI-CERTIFIED DIAMONDS
          </h1>
          <div className="w-20 h-px bg-azali-gold/50 mx-auto mb-8" />
          <p className="text-azali-cream/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Every diamond we sell is independently certified by the Gemological
            Science International lab — so you know exactly what you&apos;re getting.
          </p>
        </div>
      </section>

      {/* GSI badge section */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto bg-azali-charcoal/30 border border-azali-gold/15 p-10 text-center">
          <DiamondIcon className="w-8 h-8 text-azali-gold/50 mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-[0.15em] text-azali-gold mb-3">
            WHY GSI CERTIFICATION?
          </h2>
          <p className="text-azali-cream/45 text-sm leading-relaxed max-w-xl mx-auto">
            GSI (Gemological Science International) is one of the world&apos;s
            leading independent gemological laboratories. Their certification
            means your diamond has been evaluated by expert gemologists using
            consistent, rigorous standards — giving you confidence in your
            purchase.
          </p>
        </div>
      </section>

      {/* 4 Cs */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-azali-cream text-center mb-12">
            THE FOUR Cs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualities.map((q) => (
              <div
                key={q.title}
                className="bg-azali-charcoal/40 border border-azali-gold/10 p-8 hover:border-azali-gold/25 transition-all duration-500"
              >
                <div className="w-8 h-0.5 bg-azali-gold mb-5" />
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.1em] text-azali-cream mb-3">
                  {q.title}
                </h3>
                <p className="text-azali-cream/45 text-sm leading-relaxed">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-azali-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-azali-cream mb-4">
            FIND YOUR DIAMOND
          </h2>
          <p className="text-azali-cream/40 text-sm mb-8 max-w-md mx-auto">
            Visit us in the Diamond District for a personal consultation. We&apos;ll
            help you find — or source — the perfect stone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-azali-gold text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300"
            >
              Book Consultation
            </Link>
            <Link
              href="/custom"
              className="px-8 py-3 border border-azali-gold/30 text-azali-gold text-xs tracking-[0.2em] uppercase hover:border-azali-gold/60 transition-colors duration-300"
            >
              Design a Custom Piece
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
