import { AlertTriangle, Clock3 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Trip } from "@/lib/types";

interface DecisionStripProps {
  trip: Trip;
}

export function DecisionStrip({ trip }: DecisionStripProps): React.JSX.Element {
  return (
    <Card className="grid gap-3 md:grid-cols-5">
      <div>
        <p className="text-xs text-slate-400">Live status</p>
        <p className="text-xl font-bold capitalize">{trip.flight.status.replace("_", " ")}</p>
      </div>
      <div>
        <p className="text-xs text-slate-400">Next deadline</p>
        <p className="text-lg font-semibold">{trip.flight.countdown}</p>
      </div>
      <div>
        <p className="text-xs text-slate-400">Gate / Terminal</p>
        <p className="text-lg font-semibold">
          {trip.flight.gate} / {trip.flight.terminal}
        </p>
      </div>
      <div>
        <p className="text-xs text-slate-400">Official vs Predicted</p>
        <p className="text-lg font-semibold">
          {trip.flight.officialDeparture} {"->"} {trip.flight.predictedDeparture}
        </p>
      </div>
      <div className="rounded-lg border border-warning/30 bg-warning/10 p-3">
        <p className="mb-2 flex items-center gap-2 text-xs text-warning">
          <AlertTriangle size={14} />
          Why changed
        </p>
        <p className="text-sm text-slate-100">{trip.flight.delayReason}</p>
        <p className="mt-2 flex items-center gap-1 text-xs text-slate-400">
          <Clock3 size={12} /> Updated 23s ago
        </p>
      </div>
    </Card>
  );
}
