export interface PlanTier {
  id: "free" | "pro" | "team" | "enterprise";
  monthlyPriceUsd: number | null;
  aiCredits: number;
}

export interface CreditLedgerEntry {
  id: string;
  orgId: string;
  type: "grant" | "usage" | "top_up";
  credits: number;
  createdAt: string;
  context: string;
}

export const planCatalog: PlanTier[] = [
  { id: "free", monthlyPriceUsd: 0, aiCredits: 20 },
  { id: "pro", monthlyPriceUsd: 8, aiCredits: 200 },
  { id: "team", monthlyPriceUsd: 29, aiCredits: 500 },
  { id: "enterprise", monthlyPriceUsd: null, aiCredits: 2000 }
];

const creditLedger: CreditLedgerEntry[] = [
  {
    id: "led_1",
    orgId: "org_northstar",
    type: "grant",
    credits: 500,
    createdAt: new Date().toISOString(),
    context: "monthly_team_allocation"
  },
  {
    id: "led_2",
    orgId: "org_northstar",
    type: "usage",
    credits: -124,
    createdAt: new Date().toISOString(),
    context: "itinerary_optimizations"
  }
];

export function getCreditLedger(orgId: string): CreditLedgerEntry[] {
  return creditLedger.filter((entry) => entry.orgId === orgId);
}
