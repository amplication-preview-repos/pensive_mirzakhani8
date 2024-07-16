import { PaymentUpdateManyWithoutAppointmentsInput } from "./PaymentUpdateManyWithoutAppointmentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DiagnosticCenterWhereUniqueInput } from "../diagnosticCenter/DiagnosticCenterWhereUniqueInput";

export type AppointmentUpdateInput = {
  service?: string | null;
  appointmentDate?: Date | null;
  status?: "Option1" | null;
  payments?: PaymentUpdateManyWithoutAppointmentsInput;
  user?: UserWhereUniqueInput | null;
  diagnosticCenter?: DiagnosticCenterWhereUniqueInput | null;
};
