import { DiagnosticCenterWhereUniqueInput } from "../diagnosticCenter/DiagnosticCenterWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestResultUpdateInput = {
  result?: string | null;
  testName?: string | null;
  diagnosticCenter?: DiagnosticCenterWhereUniqueInput | null;
  publishedDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};