export interface KpiSnapshot {
  activationRate: number;
  d30Retention: number;
  freeToPaidConversion: number;
  affiliateQualityScore: number;
}

export function getKpiSnapshot(): KpiSnapshot {
  return {
    activationRate: 0.46,
    d30Retention: 0.18,
    freeToPaidConversion: 0.09,
    affiliateQualityScore: 0.71
  };
}
