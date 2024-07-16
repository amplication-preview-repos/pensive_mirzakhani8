import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { AppointmentUpdateManyWithoutUsersInput } from "./AppointmentUpdateManyWithoutUsersInput";
import { TestResultUpdateManyWithoutUsersInput } from "./TestResultUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  payments?: PaymentUpdateManyWithoutUsersInput;
  appointments?: AppointmentUpdateManyWithoutUsersInput;
  testResults?: TestResultUpdateManyWithoutUsersInput;
};
