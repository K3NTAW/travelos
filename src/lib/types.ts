export type FlightStatus = "on_time" | "delayed" | "boarding";

export interface FlightCard {
  id: string;
  flightNumber: string;
  airline: string;
  route: string;
  departure: string;
  arrival: string;
  terminal: string;
  gate: string;
  status: FlightStatus;
  countdown: string;
  officialDeparture: string;
  predictedDeparture: string;
  delayReason?: string;
}

export interface Trip {
  id: string;
  travelerName: string;
  company: string;
  destination: string;
  dateRange: string;
  riskScore: number;
  flight: FlightCard;
}
