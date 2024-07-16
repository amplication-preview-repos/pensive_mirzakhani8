import { InputJsonValue } from "../../types";
import { PaymentCreateNestedManyWithoutUsersInput } from "./PaymentCreateNestedManyWithoutUsersInput";
import { AppointmentCreateNestedManyWithoutUsersInput } from "./AppointmentCreateNestedManyWithoutUsersInput";
import { TestResultCreateNestedManyWithoutUsersInput } from "./TestResultCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  payments?: PaymentCreateNestedManyWithoutUsersInput;
  appointments?: AppointmentCreateNestedManyWithoutUsersInput;
  testResults?: TestResultCreateNestedManyWithoutUsersInput;
};
