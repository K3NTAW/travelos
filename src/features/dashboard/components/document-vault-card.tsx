import { LockKeyhole } from "lucide-react";
import { Card } from "@/components/ui/card";

const docs = ["Boarding pass - AZ403.pdf", "Hotel confirmation - Rome Suites.pdf", "Travel insurance policy.pdf"];

export function DocumentVaultCard(): React.JSX.Element {
  return (
    <Card>
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
        <LockKeyhole size={18} /> Document Vault
      </h2>
      <ul className="space-y-2">
        {docs.map((doc) => (
          <li key={doc} className="rounded-md border border-border px-3 py-2 text-sm">
            {doc}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-400">Encrypted at rest, role-restricted access, audit trail enabled.</p>
    </Card>
  );
}
