import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DIAGNOSTICCENTER_TITLE_FIELD } from "../diagnosticCenter/DiagnosticCenterTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TestResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="result" source="result" />
        <TextField label="testName" source="testName" />
        <ReferenceField
          label="DiagnosticCenter"
          source="diagnosticcenter.id"
          reference="DiagnosticCenter"
        >
          <TextField source={DIAGNOSTICCENTER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="publishedDate" source="publishedDate" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
