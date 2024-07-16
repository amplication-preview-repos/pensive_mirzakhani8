import { TestResultUpdateManyWithoutDiagnosticCentersInput } from "./TestResultUpdateManyWithoutDiagnosticCentersInput";
import { AppointmentUpdateManyWithoutDiagnosticCentersInput } from "./AppointmentUpdateManyWithoutDiagnosticCentersInput";

export type DiagnosticCenterUpdateInput = {
  name?: string | null;
  location?: string | null;
  licenseNumber?: string | null;
  managerDetails?: string | null;
  services?: string | null;
  testResults?: TestResultUpdateManyWithoutDiagnosticCentersInput;
  appointments?: AppointmentUpdateManyWithoutDiagnosticCentersInput;
};
