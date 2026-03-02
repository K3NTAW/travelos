import { Card } from "@/components/ui/card";

const schedule = [
  { day: "Day 1", focus: "Executive meetings + local dinner", timeBlocks: "09:00-17:00" },
  { day: "Day 2", focus: "Client workshop + partner meetup", timeBlocks: "08:30-18:30" },
  { day: "Day 3", focus: "Buffer day + airport transfer", timeBlocks: "10:00-16:00" }
];

export function ItineraryCard(): React.JSX.Element {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">AI Itinerary Builder</h2>
        <button className="rounded-md border border-border px-3 py-1 text-xs">Optimize itinerary</button>
      </div>
      <div className="space-y-3">
        {schedule.map((item) => (
          <div key={item.day} className="rounded-lg border border-border p-3">
            <p className="text-sm font-semibold">{item.day}</p>
            <p className="text-xs text-slate-400">{item.timeBlocks}</p>
            <p className="mt-1 text-sm">{item.focus}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
