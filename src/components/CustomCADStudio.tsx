"use client";

import { useId, useMemo, useState } from "react";

type JewelryType = "ring" | "pendant" | "earrings" | "bracelet" | "necklace";
type Metal = "yellow-gold" | "white-gold" | "rose-gold" | "platinum";
type StoneShape =
  | "round"
  | "oval"
  | "princess"
  | "emerald"
  | "cushion"
  | "marquise"
  | "pear";
type Setting = "solitaire" | "halo" | "three-stone" | "pave";

type Spec = {
  jewelryType: JewelryType;
  metal: Metal;
  stoneShape: StoneShape;
  carat: number;
  bandWidth: number;
  setting: Setting;
  ringSize: number;
  engraving: string;
};

const JEWELRY_TYPES: { value: JewelryType; label: string }[] = [
  { value: "ring", label: "Ring" },
  { value: "pendant", label: "Pendant" },
  { value: "earrings", label: "Earrings" },
  { value: "bracelet", label: "Bracelet" },
  { value: "necklace", label: "Necklace" },
];

const METALS: { value: Metal; label: string; karat: string; hex: string }[] = [
  { value: "yellow-gold", label: "Yellow Gold", karat: "18K", hex: "#C5A55A" },
  { value: "white-gold", label: "White Gold", karat: "18K", hex: "#D9D9DC" },
  { value: "rose-gold", label: "Rose Gold", karat: "18K", hex: "#C9856E" },
  { value: "platinum", label: "Platinum", karat: "950", hex: "#CFCFD2" },
];

const STONE_SHAPES: { value: StoneShape; label: string }[] = [
  { value: "round", label: "Round Brilliant" },
  { value: "oval", label: "Oval" },
  { value: "princess", label: "Princess" },
  { value: "emerald", label: "Emerald" },
  { value: "cushion", label: "Cushion" },
  { value: "marquise", label: "Marquise" },
  { value: "pear", label: "Pear" },
];

const SETTINGS: { value: Setting; label: string }[] = [
  { value: "solitaire", label: "Solitaire" },
  { value: "halo", label: "Halo" },
  { value: "three-stone", label: "Three-Stone" },
  { value: "pave", label: "Pavé" },
];

const DEFAULT_SPEC: Spec = {
  jewelryType: "ring",
  metal: "yellow-gold",
  stoneShape: "round",
  carat: 1.25,
  bandWidth: 2.2,
  setting: "solitaire",
  ringSize: 6.5,
  engraving: "",
};

// Round-brilliant approximation: 1ct ≈ 6.5mm diameter.
function caratToStoneMm(carat: number) {
  return 6.5 * Math.pow(Math.max(0.1, carat), 1 / 3);
}

// US ring sizes map roughly linearly: size 4 → 14.86mm, size 13 → 22.20mm inner Ø.
function ringSizeToInnerMm(size: number) {
  return 14.86 + (size - 4) * ((22.2 - 14.86) / 9);
}

function generateDrawingNumber(seed: number) {
  const a = (seed * 9301 + 49297) % 233280;
  const b = ((a >> 4) * 8761) % 999;
  return `AZ-${String(a).padStart(5, "0").slice(0, 5)}-${String(b).padStart(3, "0")}`;
}

export default function CustomCADStudio() {
  const [spec, setSpec] = useState<Spec>(DEFAULT_SPEC);
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState("");
  const formId = useId();

  const metalHex = METALS.find((m) => m.value === spec.metal)!.hex;
  const metalKarat = METALS.find((m) => m.value === spec.metal)!.karat;
  const metalLabel = METALS.find((m) => m.value === spec.metal)!.label;

  const drawingNumber = useMemo(() => {
    const seed =
      spec.jewelryType.length * 31 +
      spec.metal.length * 17 +
      spec.stoneShape.length * 13 +
      Math.round(spec.carat * 100) +
      Math.round(spec.bandWidth * 100) * 3 +
      spec.setting.length * 7 +
      Math.round(spec.ringSize * 10) +
      spec.engraving.length;
    return generateDrawingNumber(seed);
  }, [spec]);

  const today = useMemo(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }, []);

  const update = <K extends keyof Spec>(key: K, value: Spec[K]) =>
    setSpec((s) => ({ ...s, [key]: value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/custom-quote", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          spec,
          notes,
          contact: { name, email, phone },
          timeline,
          budget,
          drawingNumber,
        }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.message ?? "Submission failed");
      }
      setStatus("success");
      setServerMessage(
        data.message ??
          "Your design has been received. A designer will reach out within one business day.",
      );
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err instanceof Error ? err.message : "Submission failed",
      );
    }
  }

  return (
    <section
      id="design-studio"
      className="py-20 px-6 bg-azali-navy-deep border-y border-azali-gold/20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold mb-3">
            Live Design Studio
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] font-semibold text-3xl sm:text-4xl tracking-[0.15em] text-azali-white mb-4">
            DESIGN YOUR PIECE
          </h2>
          <div className="w-24 h-px bg-azali-gold/70 mx-auto mb-6" />
          <p className="text-azali-white/75 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Set your specifications and watch a live CAD preview render in real
            time. When it&apos;s right, submit it to our atelier for a quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left: spec controls */}
          <div className="lg:col-span-2 bg-azali-navy-elevated border border-azali-gold/30 p-6 sm:p-8">
            <SpecControls spec={spec} update={update} />
          </div>

          {/* Right: live CAD viewport */}
          <div className="lg:col-span-3 bg-azali-white border border-azali-gold/40 p-4 sm:p-6 flex flex-col">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-azali-navy-deep/70 font-medium">
                  Live CAD Preview
                </span>
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-azali-navy-deep/50 font-mono">
                DWG {drawingNumber}
              </span>
            </div>
            <div className="flex-1 min-h-[360px] sm:min-h-[460px]">
              <CADViewport
                spec={spec}
                metalHex={metalHex}
                metalKarat={metalKarat}
                metalLabel={metalLabel}
                drawingNumber={drawingNumber}
                date={today}
              />
            </div>
          </div>
        </div>

        {/* Quote form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-azali-navy-elevated border border-azali-gold/30 p-6 sm:p-8 grid md:grid-cols-2 gap-6"
        >
          <div className="md:col-span-2">
            <p className="text-[10px] tracking-[0.5em] uppercase text-azali-gold mb-2">
              Step Two
            </p>
            <h3 className="font-[family-name:var(--font-playfair)] font-semibold text-2xl tracking-[0.12em] text-azali-white">
              REQUEST A QUOTE
            </h3>
            <div className="w-16 h-px bg-azali-gold/60 mt-3" />
          </div>

          <FormField id={`${formId}-name`} label="Full Name" required>
            <input
              id={`${formId}-name`}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              className="azali-input"
            />
          </FormField>

          <FormField id={`${formId}-email`} label="Email" required>
            <input
              id={`${formId}-email`}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="azali-input"
            />
          </FormField>

          <FormField id={`${formId}-phone`} label="Phone">
            <input
              id={`${formId}-phone`}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className="azali-input"
            />
          </FormField>

          <FormField id={`${formId}-timeline`} label="Target Timeline">
            <select
              id={`${formId}-timeline`}
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="azali-input"
            >
              <option value="">No specific deadline</option>
              <option value="rush">Within 4 weeks (rush)</option>
              <option value="6-8-weeks">6–8 weeks (standard)</option>
              <option value="2-3-months">2–3 months</option>
              <option value="flexible">Flexible</option>
            </select>
          </FormField>

          <div className="md:col-span-2">
            <FormField id={`${formId}-budget`} label="Budget Range (optional)">
              <select
                id={`${formId}-budget`}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="azali-input"
              >
                <option value="">Prefer not to say</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="10k-25k">$10,000 – $25,000</option>
                <option value="25k-50k">$25,000 – $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </FormField>
          </div>

          <div className="md:col-span-2">
            <FormField
              id={`${formId}-notes`}
              label="Notes — Specific Wants & Needs"
            >
              <textarea
                id={`${formId}-notes`}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={5}
                placeholder="Tell us about the occasion, inspirations, family stones to set, finish preferences, recipient's style — anything that helps us craft your piece."
                className="azali-input resize-y"
              />
            </FormField>
          </div>

          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-azali-cream/60 leading-relaxed max-w-md">
              We&apos;ll review your design and reach out within one business
              day to refine details and provide pricing. No payment is collected
              at this stage.
            </p>
            <button
              type="submit"
              disabled={status === "submitting" || status === "success"}
              className="px-8 py-3 bg-azali-gold text-azali-navy-deep text-xs tracking-[0.2em] uppercase font-medium hover:bg-azali-gold-bright transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed shrink-0"
            >
              {status === "submitting"
                ? "Sending…"
                : status === "success"
                  ? "Received ✓"
                  : "Submit for Quote"}
            </button>
          </div>

          {status !== "idle" && status !== "submitting" && (
            <div
              role="status"
              className={`md:col-span-2 text-xs tracking-[0.1em] uppercase px-4 py-3 border ${
                status === "success"
                  ? "border-emerald-400/40 text-emerald-300 bg-emerald-500/5"
                  : "border-red-400/40 text-red-300 bg-red-500/5"
              }`}
            >
              {serverMessage}
            </div>
          )}
        </form>
      </div>

      <style>{`
        .azali-input {
          width: 100%;
          background: var(--azali-navy-deep);
          color: var(--azali-cream);
          border: 1px solid rgba(197, 165, 90, 0.25);
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          font-family: var(--font-inter), Arial, sans-serif;
          transition: border-color 200ms ease;
        }
        .azali-input:focus {
          outline: none;
          border-color: var(--azali-gold);
        }
        .azali-input::placeholder {
          color: rgba(232, 227, 214, 0.4);
        }
      `}</style>
    </section>
  );
}

function FormField({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[10px] tracking-[0.3em] uppercase text-azali-cream/70 mb-2">
        {label}
        {required && <span className="text-azali-gold ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}

function SpecControls({
  spec,
  update,
}: {
  spec: Spec;
  update: <K extends keyof Spec>(key: K, value: Spec[K]) => void;
}) {
  return (
    <div className="space-y-6">
      <FieldLabel label="Piece" />
      <SegmentedControl
        options={JEWELRY_TYPES}
        value={spec.jewelryType}
        onChange={(v) => update("jewelryType", v)}
      />

      <FieldLabel label="Metal" />
      <div className="grid grid-cols-2 gap-2">
        {METALS.map((m) => (
          <button
            key={m.value}
            type="button"
            onClick={() => update("metal", m.value)}
            className={`text-left px-3 py-2.5 border text-xs tracking-[0.1em] uppercase transition-colors duration-200 ${
              spec.metal === m.value
                ? "border-azali-gold bg-azali-gold/10 text-azali-white"
                : "border-azali-gold/20 text-azali-cream/70 hover:border-azali-gold/50"
            }`}
          >
            <span
              className="inline-block w-2.5 h-2.5 rounded-full mr-2 align-middle"
              style={{ backgroundColor: m.hex }}
              aria-hidden
            />
            {m.label}
            <span className="block text-[9px] tracking-[0.2em] text-azali-cream/40 mt-0.5">
              {m.karat}
            </span>
          </button>
        ))}
      </div>

      <FieldLabel label="Center Stone" />
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5">
        {STONE_SHAPES.map((s) => (
          <button
            key={s.value}
            type="button"
            onClick={() => update("stoneShape", s.value)}
            className={`px-2 py-2 border text-[10px] tracking-[0.1em] uppercase transition-colors duration-200 ${
              spec.stoneShape === s.value
                ? "border-azali-gold bg-azali-gold/10 text-azali-white"
                : "border-azali-gold/20 text-azali-cream/70 hover:border-azali-gold/50"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <Slider
        label="Carat Weight"
        value={spec.carat}
        min={0.25}
        max={5}
        step={0.05}
        suffix="ct"
        onChange={(v) => update("carat", v)}
      />

      <FieldLabel label="Setting" />
      <SegmentedControl
        options={SETTINGS}
        value={spec.setting}
        onChange={(v) => update("setting", v)}
      />

      <Slider
        label="Band Width"
        value={spec.bandWidth}
        min={1.2}
        max={6}
        step={0.1}
        suffix="mm"
        onChange={(v) => update("bandWidth", v)}
      />

      {spec.jewelryType === "ring" && (
        <Slider
          label="Ring Size (US)"
          value={spec.ringSize}
          min={4}
          max={13}
          step={0.25}
          suffix=""
          onChange={(v) => update("ringSize", v)}
        />
      )}

      <FieldLabel label="Engraving (optional)" />
      <input
        type="text"
        maxLength={32}
        value={spec.engraving}
        onChange={(e) => update("engraving", e.target.value)}
        placeholder="e.g. Forever — 06.14.27"
        className="azali-input"
      />
      <p className="text-[10px] tracking-[0.2em] uppercase text-azali-cream/40 -mt-3">
        {spec.engraving.length}/32 characters
      </p>
    </div>
  );
}

function FieldLabel({ label }: { label: string }) {
  return (
    <p className="text-[10px] tracking-[0.4em] uppercase text-azali-gold">
      {label}
    </p>
  );
}

function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={`px-3 py-2 border text-[10px] tracking-[0.2em] uppercase transition-colors duration-200 ${
            value === opt.value
              ? "border-azali-gold bg-azali-gold/10 text-azali-white"
              : "border-azali-gold/20 text-azali-cream/70 hover:border-azali-gold/50"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label
          htmlFor={id}
          className="text-[10px] tracking-[0.4em] uppercase text-azali-gold"
        >
          {label}
        </label>
        <span className="text-xs text-azali-white font-mono tracking-[0.05em]">
          {value.toFixed(step < 1 ? 2 : 1)}
          {suffix && <span className="text-azali-cream/50 ml-1">{suffix}</span>}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-azali-gold"
      />
    </div>
  );
}

// ---------- CAD viewport ----------

function CADViewport({
  spec,
  metalHex,
  metalKarat,
  metalLabel,
  drawingNumber,
  date,
}: {
  spec: Spec;
  metalHex: string;
  metalKarat: string;
  metalLabel: string;
  drawingNumber: string;
  date: string;
}) {
  const stoneMm = caratToStoneMm(spec.carat);
  const ringInnerMm =
    spec.jewelryType === "ring" ? ringSizeToInnerMm(spec.ringSize) : 18;
  // ringOuterMm uses band thickness — we approximate radial thickness as 65% of width.
  const bandRadialMm = spec.bandWidth * 0.65;
  const ringOuterMm = ringInnerMm + 2 * bandRadialMm;

  return (
    <svg
      viewBox="0 0 600 460"
      className="w-full h-full"
      role="img"
      aria-label={`Live CAD rendering of a custom ${metalLabel.toLowerCase()} ${spec.jewelryType}`}
    >
      <defs>
        {/* Grid background */}
        <pattern
          id="cad-grid"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="rgba(15, 26, 51, 0.06)"
            strokeWidth="0.5"
          />
        </pattern>
        <pattern
          id="cad-grid-major"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 100 0 L 0 0 0 100"
            fill="none"
            stroke="rgba(15, 26, 51, 0.12)"
            strokeWidth="0.75"
          />
        </pattern>
        <linearGradient id="metal-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={metalHex} stopOpacity="0.5" />
          <stop offset="50%" stopColor={metalHex} stopOpacity="0.18" />
          <stop offset="100%" stopColor={metalHex} stopOpacity="0.35" />
        </linearGradient>
        <radialGradient id="stone-fill" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="#FAFAFA" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#A8C0D8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0F1A33" stopOpacity="0.25" />
        </radialGradient>
      </defs>

      <rect width="600" height="460" fill="#FAFAF7" />
      <rect width="600" height="460" fill="url(#cad-grid)" />
      <rect width="600" height="460" fill="url(#cad-grid-major)" />

      {/* Border + title block frame */}
      <rect
        x="10"
        y="10"
        width="580"
        height="440"
        fill="none"
        stroke="#0F1A33"
        strokeWidth="1"
      />
      <line
        x1="10"
        y1="400"
        x2="590"
        y2="400"
        stroke="#0F1A33"
        strokeWidth="0.75"
      />

      {/* View labels */}
      <text
        x="24"
        y="32"
        fontFamily="var(--font-inter), monospace"
        fontSize="9"
        letterSpacing="3"
        fill="#0F1A33"
        fillOpacity="0.65"
      >
        PLAN — TOP VIEW
      </text>
      <text
        x="360"
        y="32"
        fontFamily="var(--font-inter), monospace"
        fontSize="9"
        letterSpacing="3"
        fill="#0F1A33"
        fillOpacity="0.65"
      >
        ELEVATION — SIDE
      </text>
      <line
        x1="345"
        y1="40"
        x2="345"
        y2="395"
        stroke="#0F1A33"
        strokeWidth="0.5"
        strokeDasharray="2 3"
        opacity="0.4"
      />

      {/* PLAN view content */}
      <g transform="translate(170, 215)">
        <PlanView
          spec={spec}
          stoneMm={stoneMm}
          ringInnerMm={ringInnerMm}
          ringOuterMm={ringOuterMm}
          metalHex={metalHex}
        />
      </g>

      {/* ELEVATION view content */}
      <g transform="translate(470, 215)">
        <ElevationView
          spec={spec}
          stoneMm={stoneMm}
          ringInnerMm={ringInnerMm}
          metalHex={metalHex}
        />
      </g>

      {/* Title block */}
      <TitleBlock
        spec={spec}
        metalKarat={metalKarat}
        metalLabel={metalLabel}
        drawingNumber={drawingNumber}
        date={date}
        stoneMm={stoneMm}
        ringInnerMm={ringInnerMm}
      />
    </svg>
  );
}

function PlanView({
  spec,
  stoneMm,
  ringInnerMm,
  ringOuterMm,
  metalHex,
}: {
  spec: Spec;
  stoneMm: number;
  ringInnerMm: number;
  ringOuterMm: number;
  metalHex: string;
}) {
  // Choose a scale that keeps the piece nicely sized within the plan area (~280px wide).
  const baseDim =
    spec.jewelryType === "ring"
      ? ringOuterMm + stoneMm * 0.6
      : spec.jewelryType === "earrings"
        ? stoneMm * 2.5 + 16
        : stoneMm * 1.8 + 18;
  const scale = Math.min(140 / baseDim, 12);

  if (spec.jewelryType === "ring") {
    return (
      <RingPlan
        spec={spec}
        stoneMm={stoneMm}
        ringInnerMm={ringInnerMm}
        ringOuterMm={ringOuterMm}
        scale={scale}
        metalHex={metalHex}
      />
    );
  }
  if (spec.jewelryType === "pendant" || spec.jewelryType === "necklace") {
    return (
      <PendantPlan
        spec={spec}
        stoneMm={stoneMm}
        scale={scale}
        metalHex={metalHex}
        withChain={spec.jewelryType === "necklace"}
      />
    );
  }
  if (spec.jewelryType === "earrings") {
    return (
      <EarringsPlan
        spec={spec}
        stoneMm={stoneMm}
        scale={scale}
        metalHex={metalHex}
      />
    );
  }
  return (
    <BraceletPlan
      spec={spec}
      stoneMm={stoneMm}
      scale={scale}
      metalHex={metalHex}
    />
  );
}

function ElevationView({
  spec,
  stoneMm,
  ringInnerMm,
  metalHex,
}: {
  spec: Spec;
  stoneMm: number;
  ringInnerMm: number;
  metalHex: string;
}) {
  if (spec.jewelryType === "ring") {
    const scale = Math.min(80 / (ringInnerMm + stoneMm + 6), 6);
    const innerR = (ringInnerMm / 2) * scale;
    const outerR = innerR + spec.bandWidth * 0.65 * scale;
    const stoneSide = stoneMm * scale;
    const stoneHeight = stoneSide * 0.62;
    return (
      <g>
        {/* Band side profile (rectangle/section view) */}
        <ellipse
          cx="0"
          cy="20"
          rx={outerR}
          ry={outerR * 0.35}
          fill="none"
          stroke="#0F1A33"
          strokeWidth="1"
        />
        <ellipse
          cx="0"
          cy="20"
          rx={innerR}
          ry={innerR * 0.35}
          fill="none"
          stroke="#0F1A33"
          strokeWidth="0.75"
          strokeDasharray="2 2"
          opacity="0.55"
        />
        <line
          x1={-outerR}
          y1="20"
          x2={-outerR}
          y2={20 - spec.bandWidth * scale}
          stroke="#0F1A33"
          strokeWidth="1"
        />
        <line
          x1={outerR}
          y1="20"
          x2={outerR}
          y2={20 - spec.bandWidth * scale}
          stroke="#0F1A33"
          strokeWidth="1"
        />
        <ellipse
          cx="0"
          cy={20 - spec.bandWidth * scale}
          rx={outerR}
          ry={outerR * 0.35}
          fill={metalHex}
          fillOpacity="0.18"
          stroke="#0F1A33"
          strokeWidth="1"
        />

        {/* Prongs */}
        <line
          x1={-stoneSide / 2}
          y1={20 - spec.bandWidth * scale}
          x2={-stoneSide / 2}
          y2={20 - spec.bandWidth * scale - stoneHeight + 2}
          stroke="#0F1A33"
          strokeWidth="1"
        />
        <line
          x1={stoneSide / 2}
          y1={20 - spec.bandWidth * scale}
          x2={stoneSide / 2}
          y2={20 - spec.bandWidth * scale - stoneHeight + 2}
          stroke="#0F1A33"
          strokeWidth="1"
        />

        {/* Stone profile (triangle / pavilion) */}
        <path
          d={`M ${-stoneSide / 2} ${20 - spec.bandWidth * scale - stoneHeight * 0.45}
              L ${stoneSide / 2} ${20 - spec.bandWidth * scale - stoneHeight * 0.45}
              L 0 ${20 - spec.bandWidth * scale - stoneHeight + 2}
              Z`}
          fill="url(#stone-fill)"
          stroke="#0F1A33"
          strokeWidth="0.75"
        />
        <line
          x1={-stoneSide / 2}
          y1={20 - spec.bandWidth * scale - stoneHeight * 0.45}
          x2={stoneSide / 2}
          y2={20 - spec.bandWidth * scale - stoneHeight * 0.45}
          stroke="#0F1A33"
          strokeWidth="0.5"
          opacity="0.6"
        />

        {/* Dimension: stone height */}
        <DimensionVertical
          x={stoneSide / 2 + 10}
          y1={20 - spec.bandWidth * scale - stoneHeight + 2}
          y2={20 - spec.bandWidth * scale}
          label={`${(stoneMm * 0.62).toFixed(1)}mm`}
        />
        {/* Dimension: band width */}
        <DimensionVertical
          x={-outerR - 14}
          y1={20 - spec.bandWidth * scale}
          y2={20}
          label={`${spec.bandWidth.toFixed(1)}mm`}
          flip
        />

        {/* Baseline */}
        <line
          x1={-outerR - 25}
          y1="20"
          x2={outerR + 25}
          y2="20"
          stroke="#0F1A33"
          strokeWidth="0.5"
          opacity="0.4"
        />
        <text
          x="0"
          y="58"
          textAnchor="middle"
          fontFamily="var(--font-inter), monospace"
          fontSize="7"
          letterSpacing="2"
          fill="#0F1A33"
          fillOpacity="0.6"
        >
          PROFILE
        </text>
      </g>
    );
  }

  // Generic elevation: front view of a single stone with bail or post
  const scale = Math.min(70 / (stoneMm + 8), 8);
  const s = stoneMm * scale;
  return (
    <g>
      <StoneShapeSVG
        shape={spec.stoneShape}
        size={s}
        cx={0}
        cy={0}
        stroke="#0F1A33"
        fill="url(#stone-fill)"
      />
      {spec.jewelryType === "pendant" || spec.jewelryType === "necklace" ? (
        <>
          <path
            d={`M 0 ${-s / 2 - 2} L 0 ${-s / 2 - 12}`}
            stroke="#0F1A33"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="0"
            cy={-s / 2 - 18}
            r="6"
            fill="none"
            stroke="#0F1A33"
            strokeWidth="1"
          />
          <circle
            cx="0"
            cy={-s / 2 - 18}
            r="3"
            fill={metalHex}
            fillOpacity="0.3"
            stroke="#0F1A33"
            strokeWidth="0.5"
          />
        </>
      ) : spec.jewelryType === "earrings" ? (
        <path
          d={`M 0 ${-s / 2 - 2} L 0 ${-s / 2 - 18} Q ${-s / 2} ${-s / 2 - 28}, 0 ${-s / 2 - 34}`}
          stroke="#0F1A33"
          strokeWidth="1"
          fill="none"
        />
      ) : (
        <line
          x1={-s / 2 - 12}
          y1="0"
          x2={s / 2 + 12}
          y2="0"
          stroke="#0F1A33"
          strokeWidth="0.75"
          strokeDasharray="3 2"
          opacity="0.5"
        />
      )}
      <text
        x="0"
        y={s / 2 + 24}
        textAnchor="middle"
        fontFamily="var(--font-inter), monospace"
        fontSize="7"
        letterSpacing="2"
        fill="#0F1A33"
        fillOpacity="0.6"
      >
        FRONT
      </text>
    </g>
  );
}

function RingPlan({
  spec,
  stoneMm,
  ringInnerMm,
  ringOuterMm,
  scale,
  metalHex,
}: {
  spec: Spec;
  stoneMm: number;
  ringInnerMm: number;
  ringOuterMm: number;
  scale: number;
  metalHex: string;
}) {
  const innerR = (ringInnerMm / 2) * scale;
  const outerR = (ringOuterMm / 2) * scale;
  const stoneSize = stoneMm * scale;

  return (
    <g>
      {/* Construction crosshair */}
      <line
        x1={-outerR - 25}
        y1="0"
        x2={outerR + 25}
        y2="0"
        stroke="#C5A55A"
        strokeWidth="0.4"
        strokeDasharray="2 3"
        opacity="0.7"
      />
      <line
        x1="0"
        y1={-outerR - stoneSize - 25}
        x2="0"
        y2={outerR + 25}
        stroke="#C5A55A"
        strokeWidth="0.4"
        strokeDasharray="2 3"
        opacity="0.7"
      />

      {/* Band: outer + inner circles, filled metal between */}
      <path
        d={`M ${outerR} 0 A ${outerR} ${outerR} 0 1 1 ${-outerR} 0 A ${outerR} ${outerR} 0 1 1 ${outerR} 0 Z
            M ${innerR} 0 A ${innerR} ${innerR} 0 1 0 ${-innerR} 0 A ${innerR} ${innerR} 0 1 0 ${innerR} 0 Z`}
        fillRule="evenodd"
        fill="url(#metal-fill)"
        stroke="#0F1A33"
        strokeWidth="1"
      />

      {/* Pavé tiny dots if pavé setting */}
      {spec.setting === "pave" &&
        Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const r = (innerR + outerR) / 2;
          return (
            <circle
              key={i}
              cx={Math.cos(angle) * r}
              cy={Math.sin(angle) * r}
              r="0.9"
              fill="#FAFAFA"
              stroke="#0F1A33"
              strokeWidth="0.4"
            />
          );
        })}

      {/* Side stones (three-stone) */}
      {spec.setting === "three-stone" && (
        <>
          <StoneShapeSVG
            shape={spec.stoneShape}
            size={stoneSize * 0.55}
            cx={-stoneSize * 0.75}
            cy={-outerR - stoneSize * 0.3}
            stroke="#0F1A33"
            fill="url(#stone-fill)"
          />
          <StoneShapeSVG
            shape={spec.stoneShape}
            size={stoneSize * 0.55}
            cx={stoneSize * 0.75}
            cy={-outerR - stoneSize * 0.3}
            stroke="#0F1A33"
            fill="url(#stone-fill)"
          />
        </>
      )}

      {/* Halo small stones */}
      {spec.setting === "halo" &&
        Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = stoneSize * 0.62;
          return (
            <circle
              key={i}
              cx={Math.cos(angle) * r}
              cy={-outerR - stoneSize * 0.5 + Math.sin(angle) * r}
              r={stoneSize * 0.1}
              fill="#FAFAFA"
              stroke="#0F1A33"
              strokeWidth="0.4"
            />
          );
        })}

      {/* Center stone (above band) */}
      <StoneShapeSVG
        shape={spec.stoneShape}
        size={stoneSize}
        cx={0}
        cy={-outerR - stoneSize * 0.5}
        stroke="#0F1A33"
        fill="url(#stone-fill)"
      />

      {/* Prong indicators on center stone */}
      {(["round", "oval", "cushion"] as StoneShape[]).includes(
        spec.stoneShape,
      ) &&
        Array.from({ length: 4 }).map((_, i) => {
          const angle = (Math.PI / 4) + (i * Math.PI) / 2;
          const cx = Math.cos(angle) * (stoneSize / 2);
          const cy = -outerR - stoneSize * 0.5 + Math.sin(angle) * (stoneSize / 2);
          return (
            <rect
              key={i}
              x={cx - 1.2}
              y={cy - 1.2}
              width="2.4"
              height="2.4"
              fill={metalHex}
              fillOpacity="0.7"
              stroke="#0F1A33"
              strokeWidth="0.4"
            />
          );
        })}

      {/* Inner diameter dimension */}
      <DimensionHorizontal
        y={innerR + 20}
        x1={-innerR}
        x2={innerR}
        label={`Ø ${ringInnerMm.toFixed(1)}mm`}
      />
      {/* Outer diameter dimension */}
      <DimensionHorizontal
        y={outerR + 38}
        x1={-outerR}
        x2={outerR}
        label={`Ø ${ringOuterMm.toFixed(1)}mm`}
      />
      {/* Stone size dimension */}
      <text
        x={stoneSize / 2 + 10}
        y={-outerR - stoneSize * 0.5 + 3}
        fontFamily="var(--font-inter), monospace"
        fontSize="8"
        letterSpacing="1"
        fill="#A8893A"
      >
        {stoneMm.toFixed(2)}mm · {spec.carat.toFixed(2)}ct
      </text>

      {/* Setting label */}
      <text
        x={-stoneSize / 2 - 10}
        y={-outerR - stoneSize * 0.5 + 3}
        textAnchor="end"
        fontFamily="var(--font-inter), monospace"
        fontSize="7"
        letterSpacing="2"
        fill="#0F1A33"
        fillOpacity="0.6"
      >
        {spec.setting.toUpperCase()}
      </text>
    </g>
  );
}

function PendantPlan({
  spec,
  stoneMm,
  scale,
  withChain,
}: {
  spec: Spec;
  stoneMm: number;
  scale: number;
  metalHex: string;
  withChain: boolean;
}) {
  const s = stoneMm * scale;

  return (
    <g>
      <line
        x1={-90}
        y1="0"
        x2="90"
        y2="0"
        stroke="#C5A55A"
        strokeWidth="0.4"
        strokeDasharray="2 3"
        opacity="0.7"
      />
      <line
        x1="0"
        y1="-100"
        x2="0"
        y2="100"
        stroke="#C5A55A"
        strokeWidth="0.4"
        strokeDasharray="2 3"
        opacity="0.7"
      />

      {/* Bail */}
      <circle
        cx="0"
        cy={-s / 2 - 16}
        r="8"
        fill="none"
        stroke="#0F1A33"
        strokeWidth="1"
      />
      <circle
        cx="0"
        cy={-s / 2 - 16}
        r="4"
        fill="none"
        stroke="#0F1A33"
        strokeWidth="0.5"
      />

      {/* Halo small stones */}
      {spec.setting === "halo" &&
        Array.from({ length: 14 }).map((_, i) => {
          const angle = (i / 14) * Math.PI * 2;
          const r = s * 0.65;
          return (
            <circle
              key={i}
              cx={Math.cos(angle) * r}
              cy={Math.sin(angle) * r}
              r={s * 0.075}
              fill="#FAFAFA"
              stroke="#0F1A33"
              strokeWidth="0.4"
            />
          );
        })}

      {/* Stone */}
      <StoneShapeSVG
        shape={spec.stoneShape}
        size={s}
        cx={0}
        cy={0}
        stroke="#0F1A33"
        fill="url(#stone-fill)"
      />

      {/* Chain hint */}
      {withChain && (
        <>
          <path
            d={`M ${-90} ${-s / 2 - 24} Q 0 ${-s / 2 - 8}, ${90} ${-s / 2 - 24}`}
            stroke="#0F1A33"
            strokeWidth="0.8"
            fill="none"
            strokeDasharray="3 2"
            opacity="0.6"
          />
          <text
            x="0"
            y={-s / 2 - 32}
            textAnchor="middle"
            fontFamily="var(--font-inter), monospace"
            fontSize="7"
            letterSpacing="2"
            fill="#0F1A33"
            fillOpacity="0.5"
          >
            CHAIN — 18&quot;
          </text>
        </>
      )}

      <DimensionHorizontal
        y={s / 2 + 18}
        x1={-s / 2}
        x2={s / 2}
        label={`${stoneMm.toFixed(2)}mm · ${spec.carat.toFixed(2)}ct`}
      />
    </g>
  );
}

function EarringsPlan({
  spec,
  stoneMm,
  scale,
}: {
  spec: Spec;
  stoneMm: number;
  scale: number;
  metalHex: string;
}) {
  const s = stoneMm * scale;
  const gap = s + 24;

  return (
    <g>
      <line
        x1={-gap - s}
        y1="0"
        x2={gap + s}
        y2="0"
        stroke="#C5A55A"
        strokeWidth="0.4"
        strokeDasharray="2 3"
        opacity="0.7"
      />

      {[-gap / 2, gap / 2].map((cx, i) => (
        <g key={i}>
          <StoneShapeSVG
            shape={spec.stoneShape}
            size={s}
            cx={cx}
            cy={0}
            stroke="#0F1A33"
            fill="url(#stone-fill)"
          />
          {/* post */}
          <circle
            cx={cx}
            cy={0}
            r="1.5"
            fill="#0F1A33"
          />
          {spec.setting === "halo" &&
            Array.from({ length: 12 }).map((_, j) => {
              const angle = (j / 12) * Math.PI * 2;
              const r = s * 0.62;
              return (
                <circle
                  key={j}
                  cx={cx + Math.cos(angle) * r}
                  cy={Math.sin(angle) * r}
                  r={s * 0.08}
                  fill="#FAFAFA"
                  stroke="#0F1A33"
                  strokeWidth="0.4"
                />
              );
            })}
        </g>
      ))}

      <DimensionHorizontal
        y={s / 2 + 22}
        x1={-gap / 2 - s / 2}
        x2={gap / 2 + s / 2}
        label={`PAIR — ${stoneMm.toFixed(2)}mm ea.`}
      />
    </g>
  );
}

function BraceletPlan({
  spec,
  stoneMm,
  scale,
}: {
  spec: Spec;
  stoneMm: number;
  scale: number;
  metalHex: string;
}) {
  const s = Math.min(stoneMm * scale, 18);
  return (
    <g>
      {/* Chain line */}
      <line
        x1={-130}
        y1="0"
        x2={130}
        y2="0"
        stroke="#0F1A33"
        strokeWidth="1"
      />
      {/* Chain links representation */}
      {Array.from({ length: 11 }).map((_, i) => (
        <ellipse
          key={i}
          cx={-120 + i * 24}
          cy="0"
          rx="10"
          ry="5"
          fill="none"
          stroke="#0F1A33"
          strokeWidth="0.6"
          opacity="0.7"
        />
      ))}
      {/* Center stone station */}
      <StoneShapeSVG
        shape={spec.stoneShape}
        size={s}
        cx={0}
        cy={0}
        stroke="#0F1A33"
        fill="url(#stone-fill)"
      />
      {/* Side stones if three-stone */}
      {spec.setting === "three-stone" && (
        <>
          <StoneShapeSVG
            shape={spec.stoneShape}
            size={s * 0.65}
            cx={-44}
            cy={0}
            stroke="#0F1A33"
            fill="url(#stone-fill)"
          />
          <StoneShapeSVG
            shape={spec.stoneShape}
            size={s * 0.65}
            cx={44}
            cy={0}
            stroke="#0F1A33"
            fill="url(#stone-fill)"
          />
        </>
      )}

      <DimensionHorizontal
        y={28}
        x1={-130}
        x2={130}
        label={`BRACELET — 7.0&quot; · ${stoneMm.toFixed(2)}mm center`}
      />
    </g>
  );
}

function StoneShapeSVG({
  shape,
  size,
  cx,
  cy,
  stroke,
  fill,
}: {
  shape: StoneShape;
  size: number;
  cx: number;
  cy: number;
  stroke: string;
  fill: string;
}) {
  const r = size / 2;
  switch (shape) {
    case "round":
      return (
        <g>
          <circle cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth="0.8" />
          {/* Facet lines */}
          <circle cx={cx} cy={cy} r={r * 0.55} fill="none" stroke={stroke} strokeWidth="0.4" opacity="0.7" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (i / 8) * Math.PI * 2;
            return (
              <line
                key={i}
                x1={cx + Math.cos(a) * r * 0.55}
                y1={cy + Math.sin(a) * r * 0.55}
                x2={cx + Math.cos(a) * r}
                y2={cy + Math.sin(a) * r}
                stroke={stroke}
                strokeWidth="0.35"
                opacity="0.6"
              />
            );
          })}
        </g>
      );
    case "oval":
      return (
        <g>
          <ellipse
            cx={cx}
            cy={cy}
            rx={r * 0.75}
            ry={r}
            fill={fill}
            stroke={stroke}
            strokeWidth="0.8"
          />
          <ellipse
            cx={cx}
            cy={cy}
            rx={r * 0.4}
            ry={r * 0.55}
            fill="none"
            stroke={stroke}
            strokeWidth="0.4"
            opacity="0.6"
          />
        </g>
      );
    case "princess":
      return (
        <g>
          <rect
            x={cx - r * 0.75}
            y={cy - r * 0.75}
            width={r * 1.5}
            height={r * 1.5}
            fill={fill}
            stroke={stroke}
            strokeWidth="0.8"
          />
          <line x1={cx - r * 0.75} y1={cy - r * 0.75} x2={cx + r * 0.75} y2={cy + r * 0.75} stroke={stroke} strokeWidth="0.4" opacity="0.6" />
          <line x1={cx - r * 0.75} y1={cy + r * 0.75} x2={cx + r * 0.75} y2={cy - r * 0.75} stroke={stroke} strokeWidth="0.4" opacity="0.6" />
        </g>
      );
    case "emerald": {
      const w = r * 0.8;
      const h = r;
      const c = Math.min(w, h) * 0.18;
      return (
        <g>
          <path
            d={`M ${cx - w + c} ${cy - h}
                L ${cx + w - c} ${cy - h}
                L ${cx + w} ${cy - h + c}
                L ${cx + w} ${cy + h - c}
                L ${cx + w - c} ${cy + h}
                L ${cx - w + c} ${cy + h}
                L ${cx - w} ${cy + h - c}
                L ${cx - w} ${cy - h + c} Z`}
            fill={fill}
            stroke={stroke}
            strokeWidth="0.8"
          />
          <rect x={cx - w * 0.7} y={cy - h * 0.7} width={w * 1.4} height={h * 1.4} fill="none" stroke={stroke} strokeWidth="0.35" opacity="0.5" />
          <rect x={cx - w * 0.45} y={cy - h * 0.45} width={w * 0.9} height={h * 0.9} fill="none" stroke={stroke} strokeWidth="0.35" opacity="0.5" />
        </g>
      );
    }
    case "cushion": {
      const w = r * 0.9;
      const rc = w * 0.35;
      return (
        <g>
          <rect
            x={cx - w}
            y={cy - w}
            width={w * 2}
            height={w * 2}
            rx={rc}
            ry={rc}
            fill={fill}
            stroke={stroke}
            strokeWidth="0.8"
          />
          <line x1={cx - w * 0.7} y1={cy - w * 0.7} x2={cx + w * 0.7} y2={cy + w * 0.7} stroke={stroke} strokeWidth="0.4" opacity="0.6" />
          <line x1={cx - w * 0.7} y1={cy + w * 0.7} x2={cx + w * 0.7} y2={cy - w * 0.7} stroke={stroke} strokeWidth="0.4" opacity="0.6" />
        </g>
      );
    }
    case "marquise":
      return (
        <g>
          <path
            d={`M ${cx} ${cy - r}
                Q ${cx + r * 0.55} ${cy}, ${cx} ${cy + r}
                Q ${cx - r * 0.55} ${cy}, ${cx} ${cy - r} Z`}
            fill={fill}
            stroke={stroke}
            strokeWidth="0.8"
          />
          <line x1={cx} y1={cy - r * 0.95} x2={cx} y2={cy + r * 0.95} stroke={stroke} strokeWidth="0.35" opacity="0.6" />
          <line x1={cx - r * 0.42} y1={cy} x2={cx + r * 0.42} y2={cy} stroke={stroke} strokeWidth="0.35" opacity="0.6" />
        </g>
      );
    case "pear":
      return (
        <g>
          <path
            d={`M ${cx} ${cy - r}
                Q ${cx + r * 0.8} ${cy - r * 0.2}, ${cx + r * 0.6} ${cy + r * 0.6}
                Q ${cx} ${cy + r}, ${cx - r * 0.6} ${cy + r * 0.6}
                Q ${cx - r * 0.8} ${cy - r * 0.2}, ${cx} ${cy - r} Z`}
            fill={fill}
            stroke={stroke}
            strokeWidth="0.8"
          />
          <line x1={cx} y1={cy - r * 0.95} x2={cx} y2={cy + r * 0.95} stroke={stroke} strokeWidth="0.35" opacity="0.6" />
        </g>
      );
  }
}

function DimensionHorizontal({
  y,
  x1,
  x2,
  label,
}: {
  y: number;
  x1: number;
  x2: number;
  label: string;
}) {
  const tick = 4;
  return (
    <g>
      <line x1={x1} y1={y - tick} x2={x1} y2={y + tick} stroke="#A8893A" strokeWidth="0.6" />
      <line x1={x2} y1={y - tick} x2={x2} y2={y + tick} stroke="#A8893A" strokeWidth="0.6" />
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#A8893A" strokeWidth="0.6" />
      <rect x={(x1 + x2) / 2 - 38} y={y - 6} width="76" height="12" fill="#FAFAF7" />
      <text
        x={(x1 + x2) / 2}
        y={y + 3}
        textAnchor="middle"
        fontFamily="var(--font-inter), monospace"
        fontSize="8"
        letterSpacing="1"
        fill="#A8893A"
      >
        {label}
      </text>
    </g>
  );
}

function DimensionVertical({
  x,
  y1,
  y2,
  label,
  flip,
}: {
  x: number;
  y1: number;
  y2: number;
  label: string;
  flip?: boolean;
}) {
  const tick = 4;
  return (
    <g>
      <line x1={x - tick} y1={y1} x2={x + tick} y2={y1} stroke="#A8893A" strokeWidth="0.6" />
      <line x1={x - tick} y1={y2} x2={x + tick} y2={y2} stroke="#A8893A" strokeWidth="0.6" />
      <line x1={x} y1={y1} x2={x} y2={y2} stroke="#A8893A" strokeWidth="0.6" />
      <text
        x={x + (flip ? -8 : 8)}
        y={(y1 + y2) / 2 + 3}
        textAnchor={flip ? "end" : "start"}
        fontFamily="var(--font-inter), monospace"
        fontSize="8"
        letterSpacing="1"
        fill="#A8893A"
      >
        {label}
      </text>
    </g>
  );
}

function TitleBlock({
  spec,
  metalKarat,
  metalLabel,
  drawingNumber,
  date,
  stoneMm,
  ringInnerMm,
}: {
  spec: Spec;
  metalKarat: string;
  metalLabel: string;
  drawingNumber: string;
  date: string;
  stoneMm: number;
  ringInnerMm: number;
}) {
  const cells = [
    { label: "PIECE", value: spec.jewelryType.toUpperCase() },
    { label: "METAL", value: `${metalKarat} ${metalLabel.toUpperCase()}` },
    { label: "CENTER", value: `${spec.stoneShape.toUpperCase()} · ${stoneMm.toFixed(2)}mm` },
    { label: "CARAT", value: `${spec.carat.toFixed(2)} CT` },
    { label: "SETTING", value: spec.setting.toUpperCase() },
    spec.jewelryType === "ring"
      ? { label: "SIZE", value: `US ${spec.ringSize.toFixed(2)} · Ø${ringInnerMm.toFixed(1)}MM` }
      : { label: "BAND", value: `${spec.bandWidth.toFixed(1)}MM` },
  ];

  return (
    <g>
      <text
        x="24"
        y="418"
        fontFamily="var(--font-playfair), serif"
        fontSize="11"
        letterSpacing="4"
        fill="#0F1A33"
      >
        AZALI — ATELIER
      </text>
      <text
        x="24"
        y="430"
        fontFamily="var(--font-inter), monospace"
        fontSize="7"
        letterSpacing="2"
        fill="#0F1A33"
        fillOpacity="0.55"
      >
        SAN DIEGO DIAMOND DISTRICT
      </text>
      <text
        x="24"
        y="442"
        fontFamily="var(--font-inter), monospace"
        fontSize="7"
        letterSpacing="2"
        fill="#0F1A33"
        fillOpacity="0.55"
      >
        DWG {drawingNumber} · {date}
      </text>

      {cells.map((cell, i) => {
        const x = 220 + (i % 3) * 125;
        const y = 412 + Math.floor(i / 3) * 18;
        return (
          <g key={cell.label}>
            <text
              x={x}
              y={y}
              fontFamily="var(--font-inter), monospace"
              fontSize="7"
              letterSpacing="2"
              fill="#A8893A"
            >
              {cell.label}
            </text>
            <text
              x={x + 50}
              y={y}
              fontFamily="var(--font-inter), monospace"
              fontSize="8"
              letterSpacing="1"
              fill="#0F1A33"
              fillOpacity="0.85"
            >
              {cell.value}
            </text>
          </g>
        );
      })}

      {spec.engraving && (
        <text
          x="300"
          y="445"
          textAnchor="middle"
          fontFamily="var(--font-playfair), serif"
          fontStyle="italic"
          fontSize="9"
          fill="#A8893A"
        >
          “{spec.engraving}”
        </text>
      )}
    </g>
  );
}
