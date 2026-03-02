create table organizations (
  id text primary key,
  name text not null,
  created_at timestamptz not null default now()
);

create table workspaces (
  id text primary key,
  org_id text not null references organizations(id),
  name text not null,
  seat_count integer not null default 1,
  credit_balance integer not null default 0,
  created_at timestamptz not null default now()
);

create table users (
  id text primary key,
  org_id text not null references organizations(id),
  email text not null unique,
  role text not null check (role in ('traveler', 'coordinator', 'admin')),
  created_at timestamptz not null default now()
);

create table trips (
  id text primary key,
  org_id text not null references organizations(id),
  traveler_id text not null references users(id),
  destination text not null,
  start_date date not null,
  end_date date not null,
  risk_score integer not null default 0,
  created_at timestamptz not null default now()
);

create table audit_events (
  id bigserial primary key,
  org_id text not null references organizations(id),
  actor_id text not null references users(id),
  action text not null,
  resource text not null,
  created_at timestamptz not null default now()
);

create table affiliate_clicks (
  id bigserial primary key,
  org_id text not null references organizations(id),
  trip_id text not null references trips(id),
  provider text not null,
  target_url text not null,
  created_at timestamptz not null default now()
);

create table credit_ledger_entries (
  id text primary key,
  org_id text not null references organizations(id),
  type text not null check (type in ('grant', 'usage', 'top_up')),
  credits integer not null,
  context text not null,
  created_at timestamptz not null default now()
);
