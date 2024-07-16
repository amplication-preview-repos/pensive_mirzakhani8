/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  DiagnosticCenter as PrismaDiagnosticCenter,
  TestResult as PrismaTestResult,
  Appointment as PrismaAppointment,
} from "@prisma/client";

export class DiagnosticCenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DiagnosticCenterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.diagnosticCenter.count(args);
  }

  async diagnosticCenters(
    args: Prisma.DiagnosticCenterFindManyArgs
  ): Promise<PrismaDiagnosticCenter[]> {
    return this.prisma.diagnosticCenter.findMany(args);
  }
  async diagnosticCenter(
    args: Prisma.DiagnosticCenterFindUniqueArgs
  ): Promise<PrismaDiagnosticCenter | null> {
    return this.prisma.diagnosticCenter.findUnique(args);
  }
  async createDiagnosticCenter(
    args: Prisma.DiagnosticCenterCreateArgs
  ): Promise<PrismaDiagnosticCenter> {
    return this.prisma.diagnosticCenter.create(args);
  }
  async updateDiagnosticCenter(
    args: Prisma.DiagnosticCenterUpdateArgs
  ): Promise<PrismaDiagnosticCenter> {
    return this.prisma.diagnosticCenter.update(args);
  }
  async deleteDiagnosticCenter(
    args: Prisma.DiagnosticCenterDeleteArgs
  ): Promise<PrismaDiagnosticCenter> {
    return this.prisma.diagnosticCenter.delete(args);
  }

  async findTestResults(
    parentId: string,
    args: Prisma.TestResultFindManyArgs
  ): Promise<PrismaTestResult[]> {
    return this.prisma.diagnosticCenter
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .testResults(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.diagnosticCenter
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }
}
