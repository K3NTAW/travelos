# TravelOS (Website First)

TravelOS is an AI-powered travel command center for frequent business travelers and coordinators.

## Stack

- Next.js + TypeScript
- Tailwind CSS tokenized design system
- React Query for app data flows
- Zod for validation

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Database (Prisma + Postgres)

```bash
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate:dev
npm run db:seed
```

## Product Surfaces

- Marketing website: `/`, `/product`, `/pricing`, `/security`
- Authenticated experience: `/dashboard`
- Team operations: `/admin`

## Foundation Deliverables

- ICP-first positioning for business travel teams
- Command-center UX components (decision strip, team board, trust cues)
- API contract starter in `openapi/travelos.v1.yaml`
- Security and observability baseline documentation in `docs/`
- Prisma-backed API data access with fallback to mock mode when `DATABASE_URL` is not set
# travelos
