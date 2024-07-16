import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DIAGNOSTICCENTER_TITLE_FIELD } from "./DiagnosticCenterTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DiagnosticCenterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="location" source="location" />
        <TextField label="licenseNumber" source="licenseNumber" />
        <TextField label="managerDetails" source="managerDetails" />
        <TextField label="services" source="services" />
        <ReferenceManyField
          reference="TestResult"
          target="diagnosticCenterId"
          label="TestResults"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Appointment"
          target="diagnosticCenterId"
          label="Appointments"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="service" source="service" />
            <TextField label="appointmentDate" source="appointmentDate" />
            <TextField label="status" source="status" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="DiagnosticCenter"
              source="diagnosticcenter.id"
              reference="DiagnosticCenter"
            >
              <TextField source={DIAGNOSTICCENTER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
