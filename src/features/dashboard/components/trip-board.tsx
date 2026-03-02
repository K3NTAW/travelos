import { Card } from "@/components/ui/card";
import { trips } from "@/lib/mock-data";

function riskTone(score: number): string {
  if (score >= 60) return "text-danger";
  if (score >= 30) return "text-warning";
  return "text-success";
}

export function TripBoard(): React.JSX.Element {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">Team Board</h2>
      <div className="space-y-3">
        {trips.map((trip) => (
          <article key={trip.id} className="grid gap-2 rounded-lg border border-border p-4 md:grid-cols-5">
            <div>
              <p className="text-sm font-medium">{trip.travelerName}</p>
              <p className="text-xs text-slate-400">{trip.company}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Destination</p>
              <p className="text-sm font-medium">{trip.destination}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Trip window</p>
              <p className="text-sm font-medium">{trip.dateRange}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Flight</p>
              <p className="text-sm font-medium">
                {trip.flight.flightNumber} {trip.flight.route}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Disruption risk</p>
              <p className={`text-sm font-bold ${riskTone(trip.riskScore)}`}>{trip.riskScore}/100</p>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
