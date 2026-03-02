import { getPrismaClient } from "@/lib/prisma";
import { trips as mockTrips } from "@/lib/mock-data";
import { workspace as mockWorkspace } from "@/lib/workspace";
import { CreditLedgerEntry, getCreditLedger } from "@/lib/billing";

export interface TripSummary {
  id: string;
  travelerName: string;
  destination: string;
  dateRange: string;
  riskScore: number;
}

export interface AuditEventInput {
  actorId: string;
  action: string;
  resource: string;
  orgId: string;
}

const inMemoryAudit: Array<AuditEventInput & { at: string }> = [];

export async function listTripSummaries(orgId: string): Promise<TripSummary[]> {
  const prisma = getPrismaClient();
  if (!prisma) {
    return mockTrips.map((trip) => ({
      id: trip.id,
      travelerName: trip.travelerName,
      destination: trip.destination,
      dateRange: trip.dateRange,
      riskScore: trip.riskScore
    }));
  }

  const records = await prisma.trip.findMany({
    where: { orgId },
    include: { traveler: true },
    orderBy: { startDate: "asc" }
  });

  return records.map((record) => ({
    id: record.id,
    travelerName: record.traveler.email,
    destination: record.destination,
    dateRange: `${record.startDate.toISOString().slice(0, 10)} - ${record.endDate.toISOString().slice(0, 10)}`,
    riskScore: record.riskScore
  }));
}

export async function getWorkspace(orgId: string): Promise<{
  id: string;
  orgId: string;
  name: string;
  seatCount: number;
  creditBalance: number;
}> {
  const prisma = getPrismaClient();
  if (!prisma) {
    return { ...mockWorkspace, orgId };
  }

  const workspace = await prisma.workspace.findFirst({ where: { orgId } });
  if (!workspace) {
    return {
      id: "ws_default",
      orgId,
      name: "Travel Workspace",
      seatCount: 1,
      creditBalance: 0
    };
  }

  return {
    id: workspace.id,
    orgId: workspace.orgId,
    name: workspace.name,
    seatCount: workspace.seatCount,
    creditBalance: workspace.creditBalance
  };
}

export async function listCreditLedger(orgId: string): Promise<CreditLedgerEntry[]> {
  const prisma = getPrismaClient();
  if (!prisma) {
    return getCreditLedger(orgId);
  }

  const entries = await prisma.creditLedgerEntry.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" }
  });

  return entries.map((entry) => ({
    id: entry.id,
    orgId: entry.orgId,
    type: entry.type,
    credits: entry.credits,
    createdAt: entry.createdAt.toISOString(),
    context: entry.context
  }));
}

export async function writeAuditEvent(event: AuditEventInput): Promise<void> {
  const prisma = getPrismaClient();
  if (!prisma) {
    inMemoryAudit.push({ ...event, at: new Date().toISOString() });
    return;
  }

  await prisma.auditEvent.create({
    data: {
      orgId: event.orgId,
      actorId: event.actorId,
      action: event.action,
      resource: event.resource
    }
  });
}

export async function readAuditEvents(orgId: string): Promise<Array<AuditEventInput & { at: string }>> {
  const prisma = getPrismaClient();
  if (!prisma) {
    return inMemoryAudit.filter((event) => event.orgId === orgId);
  }

  const records = await prisma.auditEvent.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" },
    take: 100
  });

  return records.map((record) => ({
    actorId: record.actorId,
    action: record.action,
    resource: record.resource,
    orgId: record.orgId,
    at: record.createdAt.toISOString()
  }));
}

export async function trackAffiliateClick(input: {
  orgId: string;
  tripId: string;
  provider: string;
  targetUrl: string;
}): Promise<void> {
  const prisma = getPrismaClient();
  if (!prisma) {
    return;
  }

  await prisma.affiliateClick.create({
    data: {
      orgId: input.orgId,
      tripId: input.tripId,
      provider: input.provider,
      targetUrl: input.targetUrl
    }
  });
}
