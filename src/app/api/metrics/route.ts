import { NextResponse } from "next/server";
import { readMetrics } from "@/lib/observability";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ data: readMetrics() });
}
