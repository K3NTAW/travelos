import { PrismaClient } from "@prisma/client";

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is required for seeding.");
  process.exit(1);
}

const prisma = new PrismaClient();

async function main() {
  await prisma.organization.upsert({
    where: { id: "org_northstar" },
    update: { name: "Northstar Labs" },
    create: {
      id: "org_northstar",
      name: "Northstar Labs"
    }
  });

  await prisma.workspace.upsert({
    where: { id: "ws_ops" },
    update: {
      orgId: "org_northstar",
      name: "Northstar Travel Ops",
      seatCount: 42,
      creditBalance: 1380
    },
    create: {
      id: "ws_ops",
      orgId: "org_northstar",
      name: "Northstar Travel Ops",
      seatCount: 42,
      creditBalance: 1380
    }
  });

  await prisma.user.upsert({
    where: { email: "ops@northstarlabs.com" },
    update: {
      role: "coordinator",
      orgId: "org_northstar"
    },
    create: {
      id: "usr_123",
      orgId: "org_northstar",
      email: "ops@northstarlabs.com",
      role: "coordinator"
    }
  });

  await prisma.user.upsert({
    where: { email: "mia.park@northstarlabs.com" },
    update: {
      role: "traveler",
      orgId: "org_northstar"
    },
    create: {
      id: "usr_mia",
      orgId: "org_northstar",
      email: "mia.park@northstarlabs.com",
      role: "traveler"
    }
  });

  await prisma.trip.upsert({
    where: { id: "trip_berlin_rome" },
    update: {
      orgId: "org_northstar",
      travelerId: "usr_mia",
      destination: "Rome",
      startDate: new Date("2026-05-14"),
      endDate: new Date("2026-05-18"),
      riskScore: 24
    },
    create: {
      id: "trip_berlin_rome",
      orgId: "org_northstar",
      travelerId: "usr_mia",
      destination: "Rome",
      startDate: new Date("2026-05-14"),
      endDate: new Date("2026-05-18"),
      riskScore: 24
    }
  });

  await prisma.creditLedgerEntry.upsert({
    where: { id: "led_1" },
    update: {
      orgId: "org_northstar",
      type: "grant",
      credits: 500,
      context: "monthly_team_allocation"
    },
    create: {
      id: "led_1",
      orgId: "org_northstar",
      type: "grant",
      credits: 500,
      context: "monthly_team_allocation"
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
