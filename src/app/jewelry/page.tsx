import { DiamondIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "Fine Jewelry | AZALI | San Diego Diamond District",
  description:
    "Explore AZALI's curated collection of fine jewelry — rings, necklaces, bracelets, and earrings crafted with the highest quality precious metals and gemstones.",
};

export default function JewelryPage() {
  const categories = [
    {
      title: "Rings",
      desc: "From elegant solitaires to bold cocktail rings, every piece is crafted to make a statement.",
    },
    {
      title: "Necklaces & Pendants",
      desc: "Delicate chains, diamond pendants, and layering pieces that elevate any look.",
    },
    {
      title: "Bracelets",
      desc: "Tennis bracelets, bangles, and cuffs in gold, platinum, and precious stones.",
    },
    {
      title: "Earrings",
      desc: "Studs, hoops, drops, and chandeliers — from everyday elegance to special occasions.",
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
            FINE JEWELRY
          </h1>
          <div className="w-20 h-px bg-azali-gold/50 mx-auto mb-8" />
          <p className="text-azali-cream/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Curated collections and one-of-a-kind pieces, handcrafted in San
            Diego&apos;s Diamond District.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-azali-charcoal/40 border border-azali-gold/10 p-10 hover:border-azali-gold/25 transition-all duration-500"
            >
              <div className="w-8 h-0.5 bg-azali-gold mb-6" />
              <DiamondIcon className="w-4 h-4 text-azali-gold/30 mb-4" />
              <h2 className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-[0.1em] text-azali-cream mb-3">
                {cat.title}
              </h2>
              <p className="text-azali-cream/45 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-azali-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-azali-cream mb-4">
            VISIT OUR SHOWROOM
          </h2>
          <p className="text-azali-cream/40 text-sm mb-8 max-w-md mx-auto">
            See our full collection in person. Walk-ins welcome, or book a
            private consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-azali-gold text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300"
            >
              Book a Visit
            </Link>
            <Link
              href="/custom"
              className="px-8 py-3 border border-azali-gold/30 text-azali-gold text-xs tracking-[0.2em] uppercase hover:border-azali-gold/60 transition-colors duration-300"
            >
              Custom Design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
