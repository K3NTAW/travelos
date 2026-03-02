import { Card } from "@/components/ui/card";
import { getMockSessionUser } from "@/lib/auth";
import { hasPermission } from "@/lib/rbac";

export default function AdminPage(): React.JSX.Element {
  const actor = getMockSessionUser();
  const canViewAdmin = hasPermission(actor.role, "team.manage");

  if (!canViewAdmin) {
    return <p className="text-sm text-slate-300">You do not have access to admin controls.</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Console</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-xs text-slate-400">Team roles</p>
          <p className="mt-1 text-2xl font-bold">42 users</p>
          <p className="text-sm text-slate-300">14 coordinators, 25 travelers, 3 admins</p>
        </Card>
        <Card>
          <p className="text-xs text-slate-400">Audit events (24h)</p>
          <p className="mt-1 text-2xl font-bold">1,286</p>
          <p className="text-sm text-slate-300">No critical anomalies detected</p>
        </Card>
        <Card>
          <p className="text-xs text-slate-400">AI credit usage</p>
          <p className="mt-1 text-2xl font-bold">6,420</p>
          <p className="text-sm text-slate-300">Top workflow: itinerary optimization | Last top-up: 300 credits</p>
        </Card>
      </div>
    </div>
  );
}
