import { CLSReportCallback, ReportCallback, Metric } from 'web-vitals';
import { map } from 'ramda';

export const reportWebVitals = async <T = ReportCallback | CLSReportCallback>(
  onPerfEntry?: T,
): Promise<void> => {
  const { getCLS, ...fns } = (await import('web-vitals')) || {};
  getCLS(onPerfEntry as CLSReportCallback);
  map(onPerfEntry as ReportCallback, fns as unknown as readonly Metric[]);
};

export default reportWebVitals;
