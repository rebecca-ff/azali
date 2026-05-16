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
    <div className="bg-azali-navy min-h-screen pt-24">
      {/* Hero */}
      <section className="py-20 px-6 bg-azali-navy-deep">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold mb-3">
            AZALI
          </p>
          <h1 className="font-[family-name:var(--font-italiana)] text-5xl sm:text-6xl md:text-7xl tracking-[0.12em] text-azali-white mb-6">
            CUSTOM DESIGN
          </h1>
          <div className="w-24 h-px bg-azali-gold/70 mx-auto mb-8" />
          <p className="text-azali-white/80 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            From engagement rings to one-of-a-kind statement pieces — our
            master jewelers bring your vision to life.
          </p>
        </div>
      </section>

      {/* Process steps — bright white cards on navy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold text-center mb-3">
            From Idea to Heirloom
          </p>
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.15em] text-azali-white text-center mb-12">
            OUR PROCESS
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-8 items-start bg-azali-white border border-azali-gold/40 p-8 hover:border-azali-gold transition-colors duration-500"
              >
                <span className="font-[family-name:var(--font-italiana)] text-4xl text-azali-gold-deep shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-italiana)] text-xl tracking-[0.15em] text-azali-navy-deep mb-2">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="text-azali-navy-deep/80 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we create — bright white tiles on navy */}
      <section className="py-16 px-6 bg-azali-navy-deep">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.15em] text-azali-white mb-12">
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
              <div
                key={item}
                className="py-8 bg-azali-white border border-azali-gold/40 hover:border-azali-gold transition-colors duration-500"
              >
                <p className="text-xs tracking-[0.25em] uppercase text-azali-navy-deep">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.12em] text-azali-white mb-4">
            START YOUR CUSTOM PIECE
          </h2>
          <div className="w-16 h-px bg-azali-gold mx-auto mb-6" />
          <p className="text-azali-white/80 text-sm mb-8 max-w-md mx-auto">
            Book a consultation and let&apos;s create something extraordinary
            together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-azali-gold text-azali-navy-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-bright transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
