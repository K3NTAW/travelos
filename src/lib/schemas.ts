import { z } from "zod";

export const roleSchema = z.enum(["traveler", "coordinator", "admin"]);

export const tripSchema = z.object({
  id: z.string(),
  travelerName: z.string().min(2),
  destination: z.string().min(2),
  dateRange: z.string().min(3),
  riskScore: z.number().int().min(0).max(100)
});

export const itineraryRequestSchema = z.object({
  tripId: z.string(),
  prompt: z.string().min(10),
  optimizeFor: z.enum(["time", "budget", "comfort"])
});

export const affiliateClickSchema = z.object({
  tripId: z.string(),
  provider: z.enum(["booking", "expedia", "kiwi"]),
  targetUrl: z.string().url()
});
