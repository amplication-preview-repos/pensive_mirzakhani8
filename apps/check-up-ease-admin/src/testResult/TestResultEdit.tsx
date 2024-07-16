import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DiagnosticCenterTitle } from "../diagnosticCenter/DiagnosticCenterTitle";
import { UserTitle } from "../user/UserTitle";

export const TestResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
