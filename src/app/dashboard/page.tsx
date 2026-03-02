import { DecisionStrip } from "@/features/dashboard/components/decision-strip";
import { DocumentVaultCard } from "@/features/dashboard/components/document-vault-card";
import { FlightTrackerCard } from "@/features/dashboard/components/flight-tracker-card";
import { HotelDiscoveryCard } from "@/features/dashboard/components/hotel-discovery-card";
import { ItineraryCard } from "@/features/dashboard/components/itinerary-card";
import { TripBoard } from "@/features/dashboard/components/trip-board";
import { trips } from "@/lib/mock-data";

export default function DashboardPage(): React.JSX.Element {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Trip Command Center</h1>
      <DecisionStrip trip={trips[0]} />
      <div className="grid gap-4 lg:grid-cols-2">
        <FlightTrackerCard trip={trips[0]} />
        <TripBoard />
        <ItineraryCard />
        <HotelDiscoveryCard />
        <DocumentVaultCard />
      </div>
    </div>
  );
}
