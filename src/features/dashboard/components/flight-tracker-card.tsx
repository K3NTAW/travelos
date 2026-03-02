import { Card } from "@/components/ui/card";
import { Trip } from "@/lib/types";

interface FlightTrackerCardProps {
  trip: Trip;
}

export function FlightTrackerCard({ trip }: FlightTrackerCardProps): React.JSX.Element {
  return (
    <Card>
      <p className="text-xs text-slate-400">{trip.flight.airline}</p>
      <h2 className="text-xl font-bold">{trip.flight.flightNumber}</h2>
      <p className="mt-2 text-sm uppercase tracking-wider text-slate-400">Live route</p>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <p className="text-2xl font-black">{trip.flight.route.split(" -> ")[0]}</p>
          <p className="text-xs text-slate-400">{trip.flight.departure}</p>
        </div>
        <p className="text-sm text-primary">{"---------------->"}</p>
        <div className="text-right">
          <p className="text-2xl font-black">{trip.flight.route.split(" -> ")[1]}</p>
          <p className="text-xs text-slate-400">{trip.flight.arrival}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-lg border border-border p-3 text-center text-sm">
        <div>
          <p className="text-xs text-slate-400">Terminal</p>
          <p className="font-semibold">{trip.flight.terminal}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Gate</p>
          <p className="font-semibold">{trip.flight.gate}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Countdown</p>
          <p className="font-semibold">{trip.flight.countdown}</p>
        </div>
      </div>
    </Card>
  );
}
