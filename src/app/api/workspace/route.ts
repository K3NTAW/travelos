import { NextResponse } from "next/server";
import { getMockSessionUser } from "@/lib/auth";
import { getWorkspace } from "@/lib/data-access";

export async function GET(): Promise<NextResponse> {
  const actor = getMockSessionUser();
  const workspace = await getWorkspace(actor.orgId);
  return NextResponse.json({
    data: workspace
  });
}
