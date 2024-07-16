import { JsonValue } from "type-fest";
import { Payment } from "../payment/Payment";
import { Appointment } from "../appointment/Appointment";
import { TestResult } from "../testResult/TestResult";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  payments?: Array<Payment>;
  appointments?: Array<Appointment>;
  testResults?: Array<TestResult>;
};
