import { NextRequest, NextResponse } from "next/server";

type Body = {
  spec?: {
    jewelryType?: string;
    metal?: string;
    stoneShape?: string;
    carat?: number;
    bandWidth?: number;
    setting?: string;
    ringSize?: number;
    engraving?: string;
  };
  notes?: string;
  contact?: { name?: string; email?: string; phone?: string };
  timeline?: string;
  budget?: string;
  drawingNumber?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.contact?.name?.trim() ?? "";
  const email = body.contact?.email?.trim() ?? "";

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, message: "Name and email are required." },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, message: "Please provide a valid email address." },
      { status: 400 },
    );
  }
  if (!body.spec || !body.spec.jewelryType) {
    return NextResponse.json(
      { ok: false, message: "Design specification is incomplete." },
      { status: 400 },
    );
  }

  // In production this dispatches to the atelier inbox / CRM. For now we
  // surface the inquiry in server logs so it's visible during development.
  console.log("[custom-quote] new inquiry", {
    drawingNumber: body.drawingNumber,
    contact: body.contact,
    timeline: body.timeline,
    budget: body.budget,
    spec: body.spec,
    notes: body.notes,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message: `Thank you, ${name.split(" ")[0]}. Drawing ${body.drawingNumber ?? ""} has been sent to our atelier — a designer will reach out within one business day.`,
  });
}
