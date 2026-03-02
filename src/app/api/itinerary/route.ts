import { NextRequest, NextResponse } from "next/server";
import { getMockSessionUser } from "@/lib/auth";
import { captureMetric } from "@/lib/observability";
import { itineraryRequestSchema } from "@/lib/schemas";
import { writeAuditEvent } from "@/lib/data-access";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  const parsed = itineraryRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const actor = getMockSessionUser();
  captureMetric({ name: "itinerary.optimize.request", value: 1, tags: { orgId: actor.orgId } });
  await writeAuditEvent({
    actorId: actor.id,
    action: "itinerary.optimize",
    resource: parsed.data.tripId,
    orgId: actor.orgId
  });

  return NextResponse.json({
    data: {
      recommendation: "Reorder day 2 sessions to reduce cross-city transfer by 42 minutes.",
      optimizeFor: parsed.data.optimizeFor
    }
  });
}
