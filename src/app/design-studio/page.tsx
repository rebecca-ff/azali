import CustomCADStudio from "@/components/CustomCADStudio";

export const metadata = {
  title: "Design Studio | AZALI | Live Custom Jewelry CAD",
  description:
    "Spec your piece in real time — jewelry type, metal, stone, setting — and watch a live CAD render. Submit the drawing to AZALI's atelier in the Jewelers Exchange for a quote.",
};

export default function DesignStudioPage() {
  return (
    <div className="bg-azali-navy min-h-screen pt-24">
      <CustomCADStudio />
    </div>
  );
}
