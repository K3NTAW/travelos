# System Architecture

## High-level
- Next.js web experience (marketing + app routes).
- API layer with versioned contracts (`openapi/travelos.v1.yaml`).
- Domain modules: trips, live status, itinerary, affiliate, admin.
- Data layer: PostgreSQL + Redis + encrypted object storage.
- ORM/data access: Prisma client with repository helpers in `src/lib/data-access.ts`.
- Event and telemetry pipeline for alerts and observability.

## Service Boundaries (modular monolith)
- `trip-domain`: trip lifecycle, traveler assignments, risk state.
- `ops-domain`: coordinator actions, approvals, escalations.
- `realtime-domain`: status ingestion, predictions, trust metadata.
- `commerce-domain`: pricing, credits, affiliate events.

## iOS Readiness
- API-first contracts and role model shared with future mobile clients.
- Keep domain payloads transport-neutral and versioned.
