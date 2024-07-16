import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DiagnosticCenterWhereUniqueInput } from "../diagnosticCenter/DiagnosticCenterWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TestResultWhereInput = {
  id?: StringFilter;
  result?: StringNullableFilter;
  testName?: StringNullableFilter;
  diagnosticCenter?: DiagnosticCenterWhereUniqueInput;
  publishedDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
