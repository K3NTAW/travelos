import { Card } from "@/components/ui/card";

const controls = [
  "Encryption in transit and at rest",
  "RBAC with traveler, coordinator, and admin roles",
  "Tamper-evident audit logs for privileged actions",
  "MFA-ready identity model and enterprise SSO support",
  "OpenTelemetry traces for operational visibility",
  "Incident runbooks and recovery targets (RPO <= 15m, RTO <= 60m)"
];

export default function SecurityPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Security</h1>
      <Card>
        <h2 className="mb-3 text-lg font-semibold">Trust baseline</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {controls.map((control) => (
            <li key={control}>- {control}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
