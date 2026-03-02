export type Role = "traveler" | "coordinator" | "admin";

export interface SessionUser {
  id: string;
  email: string;
  role: Role;
  orgId: string;
}

export function getMockSessionUser(): SessionUser {
  return {
    id: "usr_123",
    email: "ops@northstarlabs.com",
    role: "coordinator",
    orgId: "org_northstar"
  };
}

export function canManageTeam(role: Role): boolean {
  return role === "coordinator" || role === "admin";
}
