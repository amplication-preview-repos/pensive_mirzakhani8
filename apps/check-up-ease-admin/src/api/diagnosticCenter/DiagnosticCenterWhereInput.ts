import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TestResultListRelationFilter } from "../testResult/TestResultListRelationFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";

export type DiagnosticCenterWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  location?: StringNullableFilter;
  licenseNumber?: StringNullableFilter;
  managerDetails?: StringNullableFilter;
  services?: StringNullableFilter;
  testResults?: TestResultListRelationFilter;
  appointments?: AppointmentListRelationFilter;
};
