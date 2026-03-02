import { NextRequest, NextResponse } from "next/server";
import { affiliateClickSchema } from "@/lib/schemas";
import { getMockSessionUser } from "@/lib/auth";
import { trackAffiliateClick, writeAuditEvent } from "@/lib/data-access";
import { captureMetric } from "@/lib/observability";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json();
  const parsed = affiliateClickSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const actor = getMockSessionUser();
  captureMetric({ name: "affiliate.click", value: 1, tags: { provider: parsed.data.provider } });
  await writeAuditEvent({
    actorId: actor.id,
    action: "affiliate.redirect",
    resource: parsed.data.tripId,
    orgId: actor.orgId
  });
  await trackAffiliateClick({
    orgId: actor.orgId,
    tripId: parsed.data.tripId,
    provider: parsed.data.provider,
    targetUrl: parsed.data.targetUrl
  });

  return NextResponse.json({
    data: {
      provider: parsed.data.provider,
      redirectTo: parsed.data.targetUrl
    }
  });
}
