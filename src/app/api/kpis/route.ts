import { NextResponse } from "next/server";
import { getKpiSnapshot } from "@/lib/kpis";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ data: getKpiSnapshot() });
}
