import { Card } from "@/components/ui/card";

const hotels = [
  { name: "Monti Executive Suites", area: "Monti", reason: "Best for business dining and walkability", price: "EUR 219" },
  { name: "Prati Corner Hotel", area: "Prati", reason: "Quiet zone with fast airport transfer options", price: "EUR 189" }
];

export function HotelDiscoveryCard(): React.JSX.Element {
  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">Hotel Discovery</h2>
      <div className="space-y-3">
        {hotels.map((hotel) => (
          <article key={hotel.name} className="rounded-lg border border-border p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{hotel.name}</p>
              <p className="text-sm">{hotel.price}</p>
            </div>
            <p className="text-xs text-slate-400">{hotel.area}</p>
            <p className="mt-1 text-sm">{hotel.reason}</p>
          </article>
        ))}
      </div>
    </Card>
  );
}
