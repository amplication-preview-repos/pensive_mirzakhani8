import * as graphql from "@nestjs/graphql";
import { DiagnosticCenterResolverBase } from "./base/diagnosticCenter.resolver.base";
import { DiagnosticCenter } from "./base/DiagnosticCenter";
import { DiagnosticCenterService } from "./diagnosticCenter.service";

@graphql.Resolver(() => DiagnosticCenter)
export class DiagnosticCenterResolver extends DiagnosticCenterResolverBase {
  constructor(protected readonly service: DiagnosticCenterService) {
    super(service);
  }
}
