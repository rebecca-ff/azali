import Link from "next/link";

export const metadata = {
  title: "Sell Your Gold | San Diego Melting & Assay",
  description:
    "Sell refined gold by the kilo in San Diego — no LA trip required. Competitive pricing, same-day settlement, and nationwide shipping accepted.",
};

export default function SellGoldPage() {
  const steps = [
    {
      num: "01",
      title: "Bring or Ship Your Gold",
      desc: "Walk into our Jewelers Exchange location in Downtown San Diego or ship your precious metals from anywhere in the country. We accept gold, silver, platinum, and palladium.",
    },
    {
      num: "02",
      title: "Melt & Assay",
      desc: "We melt your metals and perform a precise assay to determine exact purity and weight. Full transparency throughout the process.",
    },
    {
      num: "03",
      title: "Get Your Offer",
      desc: "Receive a competitive offer based on current market prices and verified purity. No hidden fees, no lowball games.",
    },
    {
      num: "04",
      title: "Same-Day Settlement",
      desc: "Accept the offer and get paid the same day. It's that simple.",
    },
  ];

  const advantages = [
    {
      title: "No More LA Trips",
      desc: "Previously, selling kilos of gold meant driving to LA. Now you can do it all right here in San Diego.",
    },
    {
      title: "Ship From Anywhere",
      desc: "Can't come in person? Ship your metals to us with insured shipping. We handle the rest.",
    },
    {
      title: "Competitive Pricing",
      desc: "We price based on live market rates and verified purity. You'll always know exactly how we arrived at our offer.",
    },
    {
      title: "Full-Service",
      desc: "Melting, assaying, and buying all under one roof. No middlemen, no runaround.",
    },
  ];

  return (
    <div className="bg-azali-foundry min-h-screen">
      {/* Hero — molten gold banner */}
      <section className="relative min-h-[75vh] flex flex-col bg-azali-foundry-deep overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/sdma-hero-banner.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-azali-foundry-deep/70 via-azali-foundry-deep/30 to-azali-foundry-deep/95"
          aria-hidden="true"
        />

        <div className="relative z-10 mt-auto pb-16 px-6 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.5em] uppercase text-azali-ember mb-3">
            San Diego Melting &amp; Assay
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] font-bold text-5xl sm:text-6xl md:text-7xl tracking-[0.12em] text-azali-white mb-6">
            SELL YOUR GOLD
          </h1>
          <div className="w-24 h-px bg-azali-ember mx-auto mb-8" />
          <p className="text-azali-white/85 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Sell refined gold by the kilo right here in San Diego.
            Competitive pricing, same-day settlement, and no LA trip
            required.
          </p>
        </div>
      </section>

      {/* How it works — bright white cards on charcoal */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-ember text-center mb-3">
            Simple &amp; Transparent
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl tracking-[0.15em] text-azali-white text-center mb-12">
            HOW IT WORKS
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-8 items-start bg-azali-white border border-azali-ember/40 p-8 hover:border-azali-ember transition-colors duration-500"
              >
                <span className="font-[family-name:var(--font-playfair)] font-bold text-4xl text-azali-ember-deep shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl tracking-[0.15em] text-azali-ember-deep mb-2">
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

      {/* Why sell with us */}
      <section className="py-16 px-6 bg-azali-foundry-elevated">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl tracking-[0.15em] text-azali-white text-center mb-12">
            WHY SELL WITH US
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="bg-azali-white border border-azali-ember/40 p-8 hover:border-azali-ember transition-colors duration-500"
              >
                <div className="w-8 h-px bg-azali-ember-deep mb-5" />
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl tracking-[0.15em] text-azali-ember-deep mb-3">
                  {a.title.toUpperCase()}
                </h3>
                <p className="text-azali-navy-deep/80 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "Same Day", label: "Settlement" },
            { stat: "Nationwide", label: "Shipping Accepted" },
            { stat: "Live Rates", label: "Market-Based Pricing" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-[family-name:var(--font-playfair)] font-bold text-xl tracking-[0.1em] text-azali-ember mb-2">
                {item.stat.toUpperCase()}
              </p>
              <div className="w-8 h-px bg-azali-ember mx-auto mb-2" />
              <p className="text-xs tracking-[0.2em] uppercase text-azali-white/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-azali-foundry-elevated border-t border-azali-ember/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl tracking-[0.15em] text-azali-white mb-4">
            READY TO SELL?
          </h2>
          <div className="w-16 h-px bg-azali-ember mx-auto mb-6" />
          <p className="text-azali-white/80 text-sm mb-8 max-w-md mx-auto">
            Walk in or call ahead. We&apos;ll give you a fair, transparent
            offer based on current market prices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-azali-ember text-azali-foundry-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-ember-deep hover:text-azali-white transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/melting-assay"
              className="px-8 py-3 border border-azali-ember text-azali-ember text-xs tracking-[0.2em] uppercase hover:bg-azali-ember hover:text-azali-foundry-deep transition-colors duration-300"
            >
              Melting &amp; Assay Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
