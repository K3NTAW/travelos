import { NextResponse } from "next/server";
import { getMockSessionUser } from "@/lib/auth";
import { readAuditEvents } from "@/lib/data-access";

export async function GET(): Promise<NextResponse> {
  const actor = getMockSessionUser();
  const data = await readAuditEvents(actor.orgId);
  return NextResponse.json({ data });
}
