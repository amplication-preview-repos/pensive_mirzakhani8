import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DiagnosticCenterTitle } from "../diagnosticCenter/DiagnosticCenterTitle";
import { UserTitle } from "../user/UserTitle";

export const TestResultCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="result" multiline source="result" />
        <TextInput label="testName" source="testName" />
        <ReferenceInput
          source="diagnosticCenter.id"
          reference="DiagnosticCenter"
          label="DiagnosticCenter"
        >
          <SelectInput optionText={DiagnosticCenterTitle} />
        </ReferenceInput>
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};