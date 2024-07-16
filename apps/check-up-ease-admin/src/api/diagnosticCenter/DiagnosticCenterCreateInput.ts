import { TestResultCreateNestedManyWithoutDiagnosticCentersInput } from "./TestResultCreateNestedManyWithoutDiagnosticCentersInput";
import { AppointmentCreateNestedManyWithoutDiagnosticCentersInput } from "./AppointmentCreateNestedManyWithoutDiagnosticCentersInput";

export type DiagnosticCenterCreateInput = {
  name?: string | null;
  location?: string | null;
  licenseNumber?: string | null;
  managerDetails?: string | null;
  services?: string | null;
  testResults?: TestResultCreateNestedManyWithoutDiagnosticCentersInput;
  appointments?: AppointmentCreateNestedManyWithoutDiagnosticCentersInput;
};
