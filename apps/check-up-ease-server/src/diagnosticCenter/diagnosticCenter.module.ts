import { Module } from "@nestjs/common";
import { DiagnosticCenterModuleBase } from "./base/diagnosticCenter.module.base";
import { DiagnosticCenterService } from "./diagnosticCenter.service";
import { DiagnosticCenterController } from "./diagnosticCenter.controller";
import { DiagnosticCenterResolver } from "./diagnosticCenter.resolver";

@Module({
  imports: [DiagnosticCenterModuleBase],
  controllers: [DiagnosticCenterController],
  providers: [DiagnosticCenterService, DiagnosticCenterResolver],
  exports: [DiagnosticCenterService],
})
export class DiagnosticCenterModule {}
