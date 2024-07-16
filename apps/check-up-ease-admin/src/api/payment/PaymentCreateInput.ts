import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { AppointmentWhereUniqueInput } from "../appointment/AppointmentWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
  appointment?: AppointmentWhereUniqueInput | null;
};
