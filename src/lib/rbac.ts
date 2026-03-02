import { Role } from "@/lib/auth";

type Permission = "trips.read" | "team.manage" | "audit.read" | "billing.manage";

const rolePermissions: Record<Role, Permission[]> = {
  traveler: ["trips.read"],
  coordinator: ["trips.read", "team.manage", "audit.read"],
  admin: ["trips.read", "team.manage", "audit.read", "billing.manage"]
};

export function hasPermission(role: Role, permission: Permission): boolean {
  return rolePermissions[role].includes(permission);
}
