import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DiagnosticCenterWhereUniqueInput } from "../diagnosticCenter/DiagnosticCenterWhereUniqueInput";

export type AppointmentWhereInput = {
  id?: StringFilter;
  service?: StringNullableFilter;
  appointmentDate?: DateTimeNullableFilter;
  status?: "Option1";
  payments?: PaymentListRelationFilter;
  user?: UserWhereUniqueInput;
  diagnosticCenter?: DiagnosticCenterWhereUniqueInput;
};
