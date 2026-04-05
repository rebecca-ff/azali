import { DiamondIcon } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "Custom Jewelry Design | AZALI | San Diego",
  description:
    "Bring your vision to life with AZALI's custom jewelry design service. From engagement rings to bespoke statement pieces, crafted in San Diego's Diamond District.",
};

export default function CustomPage() {
  const steps = [
    {
      num: "01",
      title: "Consultation",
      desc: "Meet with our designers to discuss your vision, budget, and timeline. Bring inspiration or start from scratch — we'll guide you.",
    },
    {
      num: "02",
      title: "Design",
      desc: "We create detailed renderings of your piece so you can see it before it's made. Refine until it's exactly right.",
    },
    {
      num: "03",
      title: "Craftsmanship",
      desc: "Our master jewelers bring your design to life using the finest materials and time-honored techniques.",
    },
    {
      num: "04",
      title: "Delivery",
      desc: "Your finished piece, inspected and polished to perfection. A creation that's uniquely yours.",
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
            CUSTOM DESIGN
          </h1>
          <div className="w-20 h-px bg-azali-gold/50 mx-auto mb-8" />
          <p className="text-azali-cream/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            From engagement rings to one-of-a-kind statement pieces — our
            master jewelers bring your vision to life.
          </p>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-azali-cream text-center mb-16">
            OUR PROCESS
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-8 items-start bg-azali-charcoal/30 border border-azali-gold/10 p-8 hover:border-azali-gold/25 transition-all duration-500"
              >
                <span className="font-[family-name:var(--font-bebas-neue)] text-4xl text-azali-gold/30 shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.1em] text-azali-cream mb-2">
                    {step.title}
                  </h3>
                  <p className="text-azali-cream/45 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we create */}
      <section className="py-16 px-6 border-t border-azali-gold/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-azali-cream mb-12">
            WHAT WE CREATE
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              "Engagement Rings",
              "Wedding Bands",
              "Anniversary Pieces",
              "Statement Necklaces",
              "Custom Earrings",
              "Bespoke Bracelets",
            ].map((item) => (
              <div key={item} className="py-6 border border-azali-gold/10">
                <DiamondIcon className="w-3 h-3 text-azali-gold/30 mx-auto mb-3" />
                <p className="text-xs tracking-[0.2em] uppercase text-azali-cream/60">
                  {item}
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
            START YOUR CUSTOM PIECE
          </h2>
          <p className="text-azali-cream/40 text-sm mb-8 max-w-md mx-auto">
            Book a consultation and let&apos;s create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-azali-gold text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-light transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
