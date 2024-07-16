import { SortOrder } from "../../util/SortOrder";

export type TestResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  result?: SortOrder;
  testName?: SortOrder;
  diagnosticCenterId?: SortOrder;
  publishedDate?: SortOrder;
  userId?: SortOrder;
};
