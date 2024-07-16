import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiagnosticCenterService } from "./diagnosticCenter.service";
import { DiagnosticCenterControllerBase } from "./base/diagnosticCenter.controller.base";

@swagger.ApiTags("diagnosticCenters")
@common.Controller("diagnosticCenters")
export class DiagnosticCenterController extends DiagnosticCenterControllerBase {
  constructor(protected readonly service: DiagnosticCenterService) {
    super(service);
  }
}
