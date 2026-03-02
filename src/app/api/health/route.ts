import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    status: "ok",
    slos: {
      availability: "99.9%",
      apiReadP95Ms: 300,
      apiWriteP95Ms: 500
    },
    timestamp: new Date().toISOString()
  });
}
