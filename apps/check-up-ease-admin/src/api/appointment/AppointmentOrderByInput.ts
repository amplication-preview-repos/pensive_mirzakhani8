import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  service?: SortOrder;
  appointmentDate?: SortOrder;
  status?: SortOrder;
  userId?: SortOrder;
  diagnosticCenterId?: SortOrder;
};
