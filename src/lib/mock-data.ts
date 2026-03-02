import { Trip } from "@/lib/types";

export const trips: Trip[] = [
  {
    id: "trip_berlin_rome",
    travelerName: "Mia Park",
    company: "Northstar Labs",
    destination: "Rome",
    dateRange: "May 14 - May 18",
    riskScore: 24,
    flight: {
      id: "fl_az403",
      flightNumber: "AZ403",
      airline: "ITA Airways",
      route: "BER -> FCO",
      departure: "08:40",
      arrival: "10:55",
      terminal: "T1",
      gate: "A24",
      status: "boarding",
      countdown: "Boarding in 18m",
      officialDeparture: "08:40",
      predictedDeparture: "08:47",
      delayReason: "Inbound aircraft arrived 9m late."
    }
  },
  {
    id: "trip_lhr_jfk",
    travelerName: "Jordan Silva",
    company: "Northstar Labs",
    destination: "New York",
    dateRange: "May 15 - May 20",
    riskScore: 62,
    flight: {
      id: "fl_ba173",
      flightNumber: "BA173",
      airline: "British Airways",
      route: "LHR -> JFK",
      departure: "13:20",
      arrival: "16:05",
      terminal: "T5",
      gate: "C66",
      status: "delayed",
      countdown: "Departs in 2h 12m",
      officialDeparture: "13:20",
      predictedDeparture: "13:58",
      delayReason: "ATC flow control due to weather congestion."
    }
  }
];
