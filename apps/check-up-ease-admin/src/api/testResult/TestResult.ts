import { DiagnosticCenter } from "../diagnosticCenter/DiagnosticCenter";
import { User } from "../user/User";

export type TestResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  result: string | null;
  testName: string | null;
  diagnosticCenter?: DiagnosticCenter | null;
  publishedDate: Date | null;
  user?: User | null;
};
