import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DiagnosticCenterServiceBase } from "./base/diagnosticCenter.service.base";

@Injectable()
export class DiagnosticCenterService extends DiagnosticCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
