import Link from "next/link";

export const metadata = {
  title: "GIA-Certified Diamonds | AZALI | San Diego",
  description:
    "Every diamond at AZALI is independently certified by the Gemological Institute of America. Browse our selection or source your perfect stone.",
};

export default function DiamondsPage() {
  const qualities = [
    {
      title: "Cut",
      desc: "The precision of the cut determines how brilliantly a diamond sparkles. We carry Excellent and Ideal cuts exclusively.",
    },
    {
      title: "Color",
      desc: "From icy colorless to warm near-colorless, every stone is graded on the GIA D-to-Z scale so you know exactly what you're selecting.",
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
    <div className="bg-azali-navy min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-azali-navy-deep">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold mb-3">
            AZALI
          </p>
          <h1 className="font-[family-name:var(--font-italiana)] text-5xl sm:text-6xl md:text-7xl tracking-[0.12em] text-azali-white mb-6">
            GIA-CERTIFIED DIAMONDS
          </h1>
          <div className="w-24 h-px bg-azali-gold/70 mx-auto mb-8" />
          <p className="text-azali-white/80 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Every diamond we sell is independently certified by the
            Gemological Institute of America — so you know exactly what
            you&apos;re getting.
          </p>
        </div>
      </section>

      {/* GIA explainer — bright white card on navy */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-azali-white border border-azali-gold/40 p-10 text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold-deep mb-4">
            The Standard
          </p>
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.12em] text-azali-navy-deep mb-4">
            WHY GIA CERTIFICATION?
          </h2>
          <div className="w-16 h-px bg-azali-gold mx-auto mb-6" />
          <p className="text-azali-navy-deep/85 text-sm leading-relaxed max-w-xl mx-auto">
            The Gemological Institute of America is the most widely
            recognized diamond grading authority in the world. GIA defined
            the 4Cs in 1953 and remains the benchmark for unbiased,
            consistent diamond evaluation. A GIA report means your stone
            has been graded by independent expert gemologists using the
            industry&apos;s most rigorous standards.
          </p>
        </div>
      </section>

      {/* 4 Cs — bright white cards on navy */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold text-center mb-3">
            How We Grade
          </p>
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.15em] text-azali-white text-center mb-12">
            THE FOUR Cs
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualities.map((q) => (
              <div
                key={q.title}
                className="bg-azali-white border border-azali-gold/40 p-8 hover:border-azali-gold transition-colors duration-500"
              >
                <div className="w-8 h-px bg-azali-gold mb-5" />
                <h3 className="font-[family-name:var(--font-italiana)] text-xl tracking-[0.15em] text-azali-navy-deep mb-3">
                  {q.title.toUpperCase()}
                </h3>
                <p className="text-azali-navy-deep/80 text-sm leading-relaxed">
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-azali-navy-deep">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.12em] text-azali-white mb-4">
            FIND YOUR DIAMOND
          </h2>
          <div className="w-16 h-px bg-azali-gold mx-auto mb-6" />
          <p className="text-azali-white/80 text-sm mb-8 max-w-md mx-auto">
            Visit us in the Diamond District for a personal consultation.
            We&apos;ll help you find — or source — the perfect stone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-azali-gold text-azali-navy-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-bright transition-colors duration-300"
            >
              Book Consultation
            </Link>
            <Link
              href="/custom"
              className="px-8 py-3 border border-azali-white text-azali-white text-xs tracking-[0.2em] uppercase hover:bg-azali-white hover:text-azali-navy-deep transition-colors duration-300"
            >
              Design a Custom Piece
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
