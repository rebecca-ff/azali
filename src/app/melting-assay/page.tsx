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
    <div className="bg-azali-foundry min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-[#15110A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-italiana)] text-xl sm:text-2xl tracking-[0.15em] text-azali-gold-bright mb-2">
            SAN DIEGO
          </p>
          <h1 className="font-[family-name:var(--font-italiana)] text-5xl sm:text-6xl md:text-7xl tracking-[0.12em] text-azali-gold-bright mb-6">
            MELTING &amp; ASSAY
          </h1>
          <div className="w-24 h-px bg-azali-gold-bright mx-auto mb-8" />
          <p className="text-azali-white/80 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Professional precious metals processing with precise purity
            testing and certification — right here in San Diego&apos;s Diamond
            District.
          </p>
        </div>
      </section>

      {/* Services — warm cream cards on foundry */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#F4EFE0] border border-azali-gold-bright/50 p-8 hover:border-azali-gold-bright transition-colors duration-500"
            >
              <div className="w-8 h-px bg-azali-gold-deep mb-6" />
              <h3 className="font-[family-name:var(--font-italiana)] text-xl tracking-[0.15em] text-azali-gold-deep mb-3">
                {s.title.toUpperCase()}
              </h3>
              <p className="text-azali-navy-deep/80 text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-16 px-6 bg-[#15110A]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold-bright mb-3">
            Trusted By
          </p>
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.15em] text-azali-gold-bright mb-12">
            WHO WE SERVE
          </h2>
          <div className="grid sm:grid-cols-4 gap-6">
            {["Jewelers", "Dealers", "Pawn Shops", "Private Sellers"].map(
              (item) => (
                <div
                  key={item}
                  className="py-8 bg-[#F4EFE0] border border-azali-gold-bright/50 hover:border-azali-gold-bright transition-colors duration-500"
                >
                  <p className="text-xs tracking-[0.25em] uppercase text-azali-navy-deep">
                    {item}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "XRF + Fire Assay", label: "Dual Testing Methods" },
            { stat: "Same Day", label: "Results Available" },
            { stat: "Walk-In", label: "No Appointment Needed" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-italiana)] text-xl tracking-[0.1em] text-azali-gold-bright mb-2">
                {item.stat.toUpperCase()}
              </p>
              <div className="w-8 h-px bg-azali-gold-bright mx-auto mb-2" />
              <p className="text-xs tracking-[0.2em] uppercase text-azali-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#15110A] border-t border-azali-gold-bright/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.15em] text-azali-gold-bright mb-4">
            BRING IN YOUR METALS
          </h2>
          <div className="w-16 h-px bg-azali-gold-bright mx-auto mb-6" />
          <p className="text-azali-white/80 text-sm mb-8 max-w-md mx-auto">
            Walk in with your precious metals or ship them to us. We&apos;ll
            melt, test, and certify — fast and transparent.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-azali-gold-bright text-azali-foundry text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/sell-gold"
              className="px-8 py-3 border border-azali-gold-bright text-azali-gold-bright text-xs tracking-[0.2em] uppercase hover:bg-azali-gold-bright hover:text-azali-foundry transition-colors duration-300"
            >
              Sell Your Gold
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
