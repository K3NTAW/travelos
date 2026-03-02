# Security Baseline

## Identity and Access
- Roles: traveler, coordinator, admin.
- Enforce role checks server-side for privileged actions.
- SSO/SAML/OIDC-ready integration path.

## Data Protection
- Encrypt data in transit and at rest.
- Store documents in encrypted object storage.
- Keep secrets in a managed vault; no secrets in source.

## Audit and Compliance
- Capture audit events for itinerary actions, role changes, and affiliate redirects.
- Preserve immutable audit timeline for investigations.
- Align controls to SOC2 readiness: access reviews, incident response, change logging.

## Operational Security
- Rate-limit critical APIs.
- Add anomaly detection for suspicious role/admin behavior.
- Run dependency and container vulnerability scans in CI.
