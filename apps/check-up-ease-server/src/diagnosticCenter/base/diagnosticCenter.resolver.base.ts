/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DiagnosticCenter } from "./DiagnosticCenter";
import { DiagnosticCenterCountArgs } from "./DiagnosticCenterCountArgs";
import { DiagnosticCenterFindManyArgs } from "./DiagnosticCenterFindManyArgs";
import { DiagnosticCenterFindUniqueArgs } from "./DiagnosticCenterFindUniqueArgs";
import { CreateDiagnosticCenterArgs } from "./CreateDiagnosticCenterArgs";
import { UpdateDiagnosticCenterArgs } from "./UpdateDiagnosticCenterArgs";
import { DeleteDiagnosticCenterArgs } from "./DeleteDiagnosticCenterArgs";
import { TestResultFindManyArgs } from "../../testResult/base/TestResultFindManyArgs";
import { TestResult } from "../../testResult/base/TestResult";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { DiagnosticCenterService } from "../diagnosticCenter.service";
@graphql.Resolver(() => DiagnosticCenter)
export class DiagnosticCenterResolverBase {
  constructor(protected readonly service: DiagnosticCenterService) {}

  async _diagnosticCentersMeta(
    @graphql.Args() args: DiagnosticCenterCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DiagnosticCenter])
  async diagnosticCenters(
    @graphql.Args() args: DiagnosticCenterFindManyArgs
  ): Promise<DiagnosticCenter[]> {
    return this.service.diagnosticCenters(args);
  }

  @graphql.Query(() => DiagnosticCenter, { nullable: true })
  async diagnosticCenter(
    @graphql.Args() args: DiagnosticCenterFindUniqueArgs
  ): Promise<DiagnosticCenter | null> {
    const result = await this.service.diagnosticCenter(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DiagnosticCenter)
  async createDiagnosticCenter(
    @graphql.Args() args: CreateDiagnosticCenterArgs
  ): Promise<DiagnosticCenter> {
    return await this.service.createDiagnosticCenter({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DiagnosticCenter)
  async updateDiagnosticCenter(
    @graphql.Args() args: UpdateDiagnosticCenterArgs
  ): Promise<DiagnosticCenter | null> {
    try {
      return await this.service.updateDiagnosticCenter({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DiagnosticCenter)
  async deleteDiagnosticCenter(
    @graphql.Args() args: DeleteDiagnosticCenterArgs
  ): Promise<DiagnosticCenter | null> {
    try {
      return await this.service.deleteDiagnosticCenter(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [TestResult], { name: "testResults" })
  async findTestResults(
    @graphql.Parent() parent: DiagnosticCenter,
    @graphql.Args() args: TestResultFindManyArgs
  ): Promise<TestResult[]> {
    const results = await this.service.findTestResults(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Appointment], { name: "appointments" })
  async findAppointments(
    @graphql.Parent() parent: DiagnosticCenter,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}