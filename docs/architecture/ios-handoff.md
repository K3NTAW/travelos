# iOS Handoff Contract

## Objective
Enable iOS to reuse web-established API contracts and domain payloads without backend redesign.

## Required Endpoints (v1)
- `GET /v1/trips`
- `POST /v1/itinerary/optimize`
- `POST /v1/affiliate/click`
- `GET /v1/billing/credits`
- `GET /v1/kpis`

## Shared Domain Models
- Trip summary card
- Flight status object (official + predicted + reason)
- Credit ledger entry
- Audit event record

## Mobile Priorities
1. Live status and decision strip.
2. Alerts and timeline updates.
3. Trip dashboard read/write.
4. Document vault read access.

## Versioning Rules
- Backward-compatible field additions only in `v1`.
- Breaking changes require `v2` namespace.
- Every response includes stable IDs and ISO timestamps.
