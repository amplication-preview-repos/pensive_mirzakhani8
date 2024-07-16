import { DiagnosticCenter as TDiagnosticCenter } from "../api/diagnosticCenter/DiagnosticCenter";

export const DIAGNOSTICCENTER_TITLE_FIELD = "name";

export const DiagnosticCenterTitle = (record: TDiagnosticCenter): string => {
  return record.name?.toString() || String(record.id);
};
