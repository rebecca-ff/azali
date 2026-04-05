import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-azali-black border-t border-azali-gold/10 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-[family-name:var(--font-bebas-neue)] text-lg tracking-[0.3em] text-azali-gold/60 hover:text-azali-gold transition-colors"
            >
              AZALI
            </Link>
            <span className="w-px h-4 bg-azali-gold/15" />
            <Link
              href="/melting-assay"
              className="font-[family-name:var(--font-bebas-neue)] text-sm tracking-[0.15em] text-amber-400/50 hover:text-amber-400 transition-colors"
            >
              SD MELTING & ASSAY
            </Link>
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-azali-cream/30 hover:text-azali-gold/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <p className="text-azali-cream/20 text-xs text-center sm:text-left">
          &copy; 2026 AZALI &amp; San Diego Melting &amp; Assay. Diamond
          District, San Diego, CA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
