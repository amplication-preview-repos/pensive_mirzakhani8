import { User } from "../user/User";
import { Appointment } from "../appointment/Appointment";

export type Payment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  paymentDate: Date | null;
  status?: "Option1" | null;
  user?: User | null;
  appointment?: Appointment | null;
};
