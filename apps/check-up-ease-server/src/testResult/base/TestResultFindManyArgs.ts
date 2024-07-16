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
import { TestResultWhereInput } from "./TestResultWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { TestResultOrderByInput } from "./TestResultOrderByInput";

@ArgsType()
class TestResultFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TestResultWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => TestResultWhereInput, { nullable: true })
  @Type(() => TestResultWhereInput)
  where?: TestResultWhereInput;

  @ApiProperty({
    required: false,
    type: [TestResultOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [TestResultOrderByInput], { nullable: true })
  @Type(() => TestResultOrderByInput)
  orderBy?: Array<TestResultOrderByInput>;

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

export { TestResultFindManyArgs as TestResultFindManyArgs };
