/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DiagnosticCenterService } from "../diagnosticCenter.service";
import { DiagnosticCenterCreateInput } from "./DiagnosticCenterCreateInput";
import { DiagnosticCenter } from "./DiagnosticCenter";
import { DiagnosticCenterFindManyArgs } from "./DiagnosticCenterFindManyArgs";
import { DiagnosticCenterWhereUniqueInput } from "./DiagnosticCenterWhereUniqueInput";
import { DiagnosticCenterUpdateInput } from "./DiagnosticCenterUpdateInput";
import { TestResultFindManyArgs } from "../../testResult/base/TestResultFindManyArgs";
import { TestResult } from "../../testResult/base/TestResult";
import { TestResultWhereUniqueInput } from "../../testResult/base/TestResultWhereUniqueInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";

export class DiagnosticCenterControllerBase {
  constructor(protected readonly service: DiagnosticCenterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DiagnosticCenter })
  async createDiagnosticCenter(
    @common.Body() data: DiagnosticCenterCreateInput
  ): Promise<DiagnosticCenter> {
    return await this.service.createDiagnosticCenter({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
        licenseNumber: true,
        managerDetails: true,
        services: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DiagnosticCenter] })
  @ApiNestedQuery(DiagnosticCenterFindManyArgs)
  async diagnosticCenters(
    @common.Req() request: Request
  ): Promise<DiagnosticCenter[]> {
    const args = plainToClass(DiagnosticCenterFindManyArgs, request.query);
    return this.service.diagnosticCenters({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
        licenseNumber: true,
        managerDetails: true,
        services: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DiagnosticCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async diagnosticCenter(
    @common.Param() params: DiagnosticCenterWhereUniqueInput
  ): Promise<DiagnosticCenter | null> {
    const result = await this.service.diagnosticCenter({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        location: true,
        licenseNumber: true,
        managerDetails: true,
        services: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DiagnosticCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDiagnosticCenter(
    @common.Param() params: DiagnosticCenterWhereUniqueInput,
    @common.Body() data: DiagnosticCenterUpdateInput
  ): Promise<DiagnosticCenter | null> {
    try {
      return await this.service.updateDiagnosticCenter({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          location: true,
          licenseNumber: true,
          managerDetails: true,
          services: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DiagnosticCenter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDiagnosticCenter(
    @common.Param() params: DiagnosticCenterWhereUniqueInput
  ): Promise<DiagnosticCenter | null> {
    try {
      return await this.service.deleteDiagnosticCenter({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          location: true,
          licenseNumber: true,
          managerDetails: true,
          services: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/testResults")
  @ApiNestedQuery(TestResultFindManyArgs)
  async findTestResults(
    @common.Req() request: Request,
    @common.Param() params: DiagnosticCenterWhereUniqueInput
  ): Promise<TestResult[]> {
    const query = plainToClass(TestResultFindManyArgs, request.query);
    const results = await this.service.findTestResults(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        result: true,
        testName: true,

        diagnosticCenter: {
          select: {
            id: true,
          },
        },

        publishedDate: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/testResults")
  async connectTestResults(
    @common.Param() params: DiagnosticCenterWhereUniqueInput,
    @common.Body() body: TestResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      testResults: {
        connect: body,
      },
    };
    await this.service.updateDiagnosticCenter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/testResults")
  async updateTestResults(
    @common.Param() params: DiagnosticCenterWhereUniqueInput,
    @common.Body() body: TestResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      testResults: {
        set: body,
      },
    };
    await this.service.updateDiagnosticCenter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/testResults")
  async disconnectTestResults(
    @common.Param() params: DiagnosticCenterWhereUniqueInput,
    @common.Body() body: TestResultWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      testResults: {
        disconnect: body,
      },
    };
    await this.service.updateDiagnosticCenter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: DiagnosticCenterWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        service: true,
        appointmentDate: true,
        status: true,

        user: {
          select: {
            id: true,
          },
        },

        diagnosticCenter: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  async connectAppointments(
    @common.Param() params: DiagnosticCenterWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateDiagnosticCenter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: DiagnosticCenterWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateDiagnosticCenter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: DiagnosticCenterWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateDiagnosticCenter({
      where: params,
      data,
      select: { id: true },
    });
  }
}