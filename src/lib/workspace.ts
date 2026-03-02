export interface Workspace {
  id: string;
  orgId: string;
  name: string;
  seatCount: number;
  creditBalance: number;
}

export const workspace: Workspace = {
  id: "ws_ops",
  orgId: "org_northstar",
  name: "Northstar Travel Ops",
  seatCount: 42,
  creditBalance: 1380
};
