/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { TestResultUpdateManyWithoutDiagnosticCentersInput } from "./TestResultUpdateManyWithoutDiagnosticCentersInput";
import { Type } from "class-transformer";
import { AppointmentUpdateManyWithoutDiagnosticCentersInput } from "./AppointmentUpdateManyWithoutDiagnosticCentersInput";

@InputType()
class DiagnosticCenterUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  licenseNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  managerDetails?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  services?: string | null;

  @ApiProperty({
    required: false,
    type: () => TestResultUpdateManyWithoutDiagnosticCentersInput,
  })
  @ValidateNested()
  @Type(() => TestResultUpdateManyWithoutDiagnosticCentersInput)
  @IsOptional()
  @Field(() => TestResultUpdateManyWithoutDiagnosticCentersInput, {
    nullable: true,
  })
  testResults?: TestResultUpdateManyWithoutDiagnosticCentersInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutDiagnosticCentersInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutDiagnosticCentersInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutDiagnosticCentersInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutDiagnosticCentersInput;
}

export { DiagnosticCenterUpdateInput as DiagnosticCenterUpdateInput };