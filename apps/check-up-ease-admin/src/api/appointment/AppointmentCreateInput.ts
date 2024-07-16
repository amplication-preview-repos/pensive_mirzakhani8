import { PaymentCreateNestedManyWithoutAppointmentsInput } from "./PaymentCreateNestedManyWithoutAppointmentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DiagnosticCenterWhereUniqueInput } from "../diagnosticCenter/DiagnosticCenterWhereUniqueInput";

export type AppointmentCreateInput = {
  service?: string | null;
  appointmentDate?: Date | null;
  status?: "Option1" | null;
  payments?: PaymentCreateNestedManyWithoutAppointmentsInput;
  user?: UserWhereUniqueInput | null;
  diagnosticCenter?: DiagnosticCenterWhereUniqueInput | null;
};
