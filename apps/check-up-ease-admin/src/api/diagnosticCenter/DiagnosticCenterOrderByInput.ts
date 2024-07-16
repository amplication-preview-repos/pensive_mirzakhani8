import { SortOrder } from "../../util/SortOrder";

export type DiagnosticCenterOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  location?: SortOrder;
  licenseNumber?: SortOrder;
  managerDetails?: SortOrder;
  services?: SortOrder;
};
