import { Card } from "@/components/ui/card";

const features = [
  "Trip Control Center with live decision strip and trust panel",
  "Dual-track timeline (official vs predicted changes)",
  "AI itinerary generation and optimization",
  "Coordinator team board with disruption risk scoring",
  "Hotel discovery optimized for business travel",
  "Encrypted document vault with access controls"
];

export default function ProductPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Product</h1>
      <p className="max-w-3xl text-slate-300">Built to reduce travel stress by giving teams one reliable operating system.</p>
      <Card>
        <h2 className="mb-3 text-xl font-semibold">Core capabilities</h2>
        <ul className="space-y-2 text-sm text-slate-200">
          {features.map((feature) => (
            <li key={feature}>- {feature}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
