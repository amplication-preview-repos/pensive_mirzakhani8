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
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { PaymentUpdateManyWithoutUsersInput } from "./PaymentUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { AppointmentUpdateManyWithoutUsersInput } from "./AppointmentUpdateManyWithoutUsersInput";
import { TestResultUpdateManyWithoutUsersInput } from "./TestResultUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => PaymentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  payments?: PaymentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => AppointmentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AppointmentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AppointmentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  appointments?: AppointmentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => TestResultUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TestResultUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TestResultUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  testResults?: TestResultUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };