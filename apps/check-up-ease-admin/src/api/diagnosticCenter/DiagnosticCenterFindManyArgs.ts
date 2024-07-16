import { DiagnosticCenterWhereInput } from "./DiagnosticCenterWhereInput";
import { DiagnosticCenterOrderByInput } from "./DiagnosticCenterOrderByInput";

export type DiagnosticCenterFindManyArgs = {
  where?: DiagnosticCenterWhereInput;
  orderBy?: Array<DiagnosticCenterOrderByInput>;
  skip?: number;
  take?: number;
};
