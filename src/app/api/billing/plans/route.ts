import { NextResponse } from "next/server";
import { planCatalog } from "@/lib/billing";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ data: planCatalog });
}
