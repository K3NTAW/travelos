export interface MetricEvent {
  name: string;
  value: number;
  tags?: Record<string, string>;
}

const metricBuffer: MetricEvent[] = [];

export function captureMetric(event: MetricEvent): void {
  metricBuffer.push(event);
}

export function readMetrics(): MetricEvent[] {
  return metricBuffer;
}
