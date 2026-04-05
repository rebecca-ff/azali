import { BarIcon, FlameIcon } from "@/components/Icons";
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
      desc: "Walk into our Diamond District location or ship your precious metals from anywhere in the country. We accept gold, silver, platinum, and palladium.",
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
    <div className="bg-[#1a1610] min-h-screen pt-24">
      {/* Hero */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,130,50,0.06)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-amber-500/30" />
            <BarIcon className="w-6 h-6 text-amber-400/60" />
            <div className="w-12 h-px bg-amber-500/30" />
          </div>

          <p className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.15em] text-amber-100/50 mb-1">
            SAN DIEGO MELTING & ASSAY
          </p>
          <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-6xl md:text-7xl tracking-[0.2em] text-amber-400 mb-6">
            SELL YOUR GOLD
          </h1>
          <div className="w-20 h-px bg-amber-500/40 mx-auto mb-8" />
          <p className="text-amber-100/50 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Sell refined gold by the kilo right here in San Diego. Competitive
            pricing, same-day settlement, and no LA trip required.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-amber-100 text-center mb-16">
            HOW IT WORKS
          </h2>
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex gap-8 items-start bg-[#211c14]/80 border border-amber-500/10 p-8 hover:border-amber-500/25 transition-all duration-500"
              >
                <span className="font-[family-name:var(--font-bebas-neue)] text-4xl text-amber-500/30 shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.1em] text-amber-100 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-amber-100/40 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why sell with us */}
      <section className="py-16 px-6 border-t border-amber-500/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl tracking-[0.15em] text-amber-100 text-center mb-12">
            WHY SELL WITH US
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="bg-[#211c14]/80 border border-amber-500/10 p-8 hover:border-amber-500/25 transition-all duration-500"
              >
                <div className="w-8 h-0.5 bg-amber-400 mb-5" />
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-[0.1em] text-amber-100 mb-3">
                  {a.title}
                </h3>
                <p className="text-amber-100/40 text-sm leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { stat: "Same Day", label: "Settlement" },
            { stat: "Nationwide", label: "Shipping Accepted" },
            { stat: "Live Rates", label: "Market-Based Pricing" },
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
            READY TO SELL?
          </h2>
          <p className="text-amber-100/40 text-sm mb-8 max-w-md mx-auto">
            Walk in or call ahead. We&apos;ll give you a fair, transparent offer
            based on current market prices.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-amber-500 text-azali-black text-xs tracking-[0.2em] uppercase font-medium hover:bg-amber-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/melting-assay"
              className="px-8 py-3 border border-amber-500/30 text-amber-400 text-xs tracking-[0.2em] uppercase hover:border-amber-500/60 transition-colors duration-300"
            >
              Melting & Assay Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
