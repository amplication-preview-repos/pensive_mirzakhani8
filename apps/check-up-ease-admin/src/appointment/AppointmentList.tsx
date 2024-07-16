import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { DIAGNOSTICCENTER_TITLE_FIELD } from "../diagnosticCenter/DiagnosticCenterTitle";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
