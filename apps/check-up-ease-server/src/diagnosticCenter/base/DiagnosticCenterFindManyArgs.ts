/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DiagnosticCenterWhereInput } from "./DiagnosticCenterWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DiagnosticCenterOrderByInput } from "./DiagnosticCenterOrderByInput";

@ArgsType()
class DiagnosticCenterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DiagnosticCenterWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DiagnosticCenterWhereInput, { nullable: true })
  @Type(() => DiagnosticCenterWhereInput)
  where?: DiagnosticCenterWhereInput;

  @ApiProperty({
    required: false,
    type: [DiagnosticCenterOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DiagnosticCenterOrderByInput], { nullable: true })
  @Type(() => DiagnosticCenterOrderByInput)
  orderBy?: Array<DiagnosticCenterOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { DiagnosticCenterFindManyArgs as DiagnosticCenterFindManyArgs };