import { NextResponse } from "next/server";
import { getMockSessionUser } from "@/lib/auth";
import { listTripSummaries } from "@/lib/data-access";
import { tripSchema } from "@/lib/schemas";

export async function GET(): Promise<NextResponse> {
  const actor = getMockSessionUser();
  const trips = await listTripSummaries(actor.orgId);
  const payload = trips.map((trip) =>
    tripSchema.parse({
      id: trip.id,
      travelerName: trip.travelerName,
      destination: trip.destination,
      dateRange: trip.dateRange,
      riskScore: trip.riskScore
    })
  );
  return NextResponse.json({ data: payload });
}
