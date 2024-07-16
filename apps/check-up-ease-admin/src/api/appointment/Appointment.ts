import { Payment } from "../payment/Payment";
import { User } from "../user/User";
import { DiagnosticCenter } from "../diagnosticCenter/DiagnosticCenter";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  service: string | null;
  appointmentDate: Date | null;
  status?: "Option1" | null;
  payments?: Array<Payment>;
  user?: User | null;
  diagnosticCenter?: DiagnosticCenter | null;
};
