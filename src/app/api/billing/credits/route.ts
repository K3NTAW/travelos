import { NextResponse } from "next/server";
import { getMockSessionUser } from "@/lib/auth";
import { listCreditLedger } from "@/lib/data-access";

export async function GET(): Promise<NextResponse> {
  const actor = getMockSessionUser();
  const data = await listCreditLedger(actor.orgId);
  return NextResponse.json({ data });
}
