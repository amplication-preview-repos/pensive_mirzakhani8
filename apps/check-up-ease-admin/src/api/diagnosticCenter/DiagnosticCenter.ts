import { TestResult } from "../testResult/TestResult";
import { Appointment } from "../appointment/Appointment";

export type DiagnosticCenter = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  location: string | null;
  licenseNumber: string | null;
  managerDetails: string | null;
  services: string | null;
  testResults?: Array<TestResult>;
  appointments?: Array<Appointment>;
};
