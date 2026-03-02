import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HomePage(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-border bg-card p-8">
        <p className="mb-2 text-xs uppercase tracking-wider text-primary">Website-first launch</p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight">The command center for business travel teams.</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          TravelOS unifies live flight intelligence, team coordination, documents, itinerary optimization, and hotel discovery into one
          premium workspace.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-semibold text-black">
            Open dashboard <ArrowRight size={16} />
          </Link>
          <Link href="/pricing" className="rounded-md border border-border px-4 py-2 font-semibold">
            View pricing
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <Sparkles className="mb-2 text-primary" size={18} />
          <h2 className="font-semibold">AI-native workflow</h2>
          <p className="mt-1 text-sm text-slate-300">AI is embedded into planning, optimization, and disruption response.</p>
        </Card>
        <Card>
          <Users className="mb-2 text-accent" size={18} />
          <h2 className="font-semibold">Coordinator-first by design</h2>
          <p className="mt-1 text-sm text-slate-300">Shared trips, delegated alerts, and role-scoped controls for teams.</p>
        </Card>
        <Card>
          <ShieldCheck className="mb-2 text-success" size={18} />
          <h2 className="font-semibold">Enterprise trust baseline</h2>
          <p className="mt-1 text-sm text-slate-300">Audit logs, encryption, and policy controls from day one.</p>
        </Card>
      </section>
    </div>
  );
}
