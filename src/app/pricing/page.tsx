import { Card } from "@/components/ui/card";

const plans = [
  { name: "Free", price: "$0", bullets: ["1 active trip", "20 AI credits/month", "Basic affiliate links"] },
  { name: "Pro", price: "$8/mo", bullets: ["5 active trips", "200 AI credits/month", "Document vault"] },
  { name: "Team", price: "$29/user/mo", bullets: ["Role controls", "Shared credit pool", "Audit logs"] },
  { name: "Enterprise", price: "Custom", bullets: ["SSO + SCIM", "SLA support", "Advanced policy controls"] }
];

export default function PricingPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <p className="text-xs uppercase tracking-wide text-slate-400">{plan.name}</p>
            <p className="my-2 text-2xl font-bold">{plan.price}</p>
            <ul className="space-y-1 text-sm text-slate-300">
              {plan.bullets.map((bullet) => (
                <li key={bullet}>- {bullet}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="mb-2 text-lg font-semibold">AI Credit Top-ups</h2>
        <p className="text-sm text-slate-300">100 credits = $3, 300 credits = $7, pooled per team workspace.</p>
      </Card>
    </div>
  );
}
