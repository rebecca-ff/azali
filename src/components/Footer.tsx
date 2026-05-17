import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-azali-navy-deepest border-t border-azali-gold/20 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="font-[family-name:var(--font-italiana)] text-3xl tracking-[0.15em] text-azali-gold-bright hover:text-azali-gold transition-colors duration-300"
            >
              AZALI
            </Link>
            <span className="w-px h-6 bg-azali-gold/30" />
            <Link
              href="/melting-assay"
              className="text-xs tracking-[0.2em] uppercase text-azali-cream/60 hover:text-azali-gold-bright transition-colors duration-300"
            >
              SD Melting &amp; Assay
            </Link>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs tracking-[0.15em] uppercase text-azali-cream/60 hover:text-azali-gold-bright transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full h-px bg-azali-gold/20 mb-6" />
        <p className="text-azali-cream/50 text-xs tracking-[0.1em] text-center sm:text-left">
          &copy; 2026 AZALI &amp; San Diego Melting &amp; Assay. Jewelers
          Exchange, Downtown San Diego, CA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
