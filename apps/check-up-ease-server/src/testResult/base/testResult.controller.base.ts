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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TestResultService } from "../testResult.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TestResultCreateInput } from "./TestResultCreateInput";
import { TestResult } from "./TestResult";
import { TestResultFindManyArgs } from "./TestResultFindManyArgs";
import { TestResultWhereUniqueInput } from "./TestResultWhereUniqueInput";
import { TestResultUpdateInput } from "./TestResultUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TestResultControllerBase {
  constructor(
    protected readonly service: TestResultService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TestResult })
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTestResult(
    @common.Body() data: TestResultCreateInput
  ): Promise<TestResult> {
    return await this.service.createTestResult({
      data: {
        ...data,

        diagnosticCenter: data.diagnosticCenter
          ? {
              connect: data.diagnosticCenter,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [TestResult] })
  @ApiNestedQuery(TestResultFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async testResults(@common.Req() request: Request): Promise<TestResult[]> {
    const args = plainToClass(TestResultFindManyArgs, request.query);
    return this.service.testResults({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: TestResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async testResult(
    @common.Param() params: TestResultWhereUniqueInput
  ): Promise<TestResult | null> {
    const result = await this.service.testResult({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: TestResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTestResult(
    @common.Param() params: TestResultWhereUniqueInput,
    @common.Body() data: TestResultUpdateInput
  ): Promise<TestResult | null> {
    try {
      return await this.service.updateTestResult({
        where: params,
        data: {
          ...data,

          diagnosticCenter: data.diagnosticCenter
            ? {
                connect: data.diagnosticCenter,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: TestResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TestResult",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTestResult(
    @common.Param() params: TestResultWhereUniqueInput
  ): Promise<TestResult | null> {
    try {
      return await this.service.deleteTestResult({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
