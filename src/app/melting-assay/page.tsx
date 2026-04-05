import { FlameIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "Precious Metals Melting & Assay | San Diego Melting & Assay",
  description:
    "Professional precious metals melting and assaying services in San Diego. Accurate purity testing, certification, and state-of-the-art processing.",
};

export default function MeltingAssayPage() {
  const services = [
    {
      title: "Precious Metals Melting",
      desc: "We melt down gold, silver, platinum, and palladium using state-of-the-art furnaces with precise temperature control for optimal results.",
    },
    {
      title: "Assay & Purity Testing",
      desc: "Get accurate purity certification using fire assay and XRF analysis. Know exactly what your metals are worth before you sell.",
    },
    {
      title: "Refining Services",
      desc: "From scrap jewelry to industrial byproducts, we process and refine precious metals to their purest form.",
    },
    {
      title: "Certification",
      desc: "Receive detailed assay reports documenting the weight, purity, and value of your precious metals.",
    },
  ];

  return (
    <div className="bg-[#1a1610] min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,130,50,0.06)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-500/30" />
            <FlameIcon className="w-6 h-6 text-amber-500/60" />
            <div className="w-12 h-px bg-amber-500/30" />
          </div>

          <h1 className="font-[family-name:var(--font-bebas-neue)] text-3xl sm:text-4xl tracking-[0.15em] text-amber-100 mb-1">
            SAN DIEGO
          </h1>
          <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl tracking-[0.2em] text-amber-400 mb-6">
            MELTING & ASSAY
          </h1>
          <div className="w-20 h-px bg-amber-500/40 mx-auto mb-8" />
          <p className="text-amber-100/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Professional precious metals processing with precise purity
            testing and certification — right here in San Diego&apos;s Diamond
            District.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#211c14]/80 border border-amber-500/10 p-8 hover:border-amber-500/25 transition-all duration-500"
            >
              <div className="w-8 h-0.5 bg-amber-500 mb-6" />
              <FlameIcon className="w-4 h-4 text-amber-500/40 mb-4" />
              <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.1em] text-amber-100 mb-3">
                {s.title}
              </h3>
              <p className="text-amber-100/40 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 px-6 border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-amber-100 mb-12">
            WHO WE SERVE
          </h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {["Jewelers", "Dealers", "Pawn Shops", "Private Sellers"].map(
              (item) => (
                <div key={item} className="py-6 border border-amber-500/10">
                  <FlameIcon className="w-3 h-3 text-amber-500/30 mx-auto mb-3" />
                  <p className="text-xs tracking-[0.2em] uppercase text-amber-100/50">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "XRF + Fire Assay", label: "Dual Testing Methods" },
            { stat: "Same Day", label: "Results Available" },
            { stat: "Walk-In", label: "No Appointment Needed" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wider text-amber-400 mb-1">
                {item.stat}
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-amber-100/40">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-amber-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-amber-100 mb-4">
            BRING IN YOUR METALS
          </h2>
          <p className="text-amber-100/40 text-sm mb-8 max-w-md mx-auto">
            Walk in with your precious metals or ship them to us. We&apos;ll melt,
            test, and certify — fast and transparent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-amber-500 text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-amber-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/sell-gold"
              className="px-8 py-3 border border-amber-500/30 text-amber-400 text-xs tracking-[0.2em] uppercase hover:border-amber-500/60 transition-colors duration-300"
            >
              Sell Your Gold
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
