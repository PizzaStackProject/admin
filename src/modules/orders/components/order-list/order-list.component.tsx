import { Orders } from "@app/core/types";
import {
  ChipField,
  Datagrid,
  DateField,
  FunctionField,
  List,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  TextField,
} from "react-admin";

const filters = [
  <ReferenceInput source="status" reference="order_status" label="Order Status">
    <SelectInput optionText="label" />
  </ReferenceInput>,
];

export const OrderList = () => (
  <List
    exporter={false}
    filters={filters}
    sort={{ field: "created_at", order: "DESC" }}
  >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField reference="order_status" source="status" label="Status">
        <ChipField source="label" />
      </ReferenceField>

      <TextField source="client_address" label="Client Address" />
      <TextField source="client_name" label="Client Name" />
      <TextField source="client_phone" label="Client Phone" />

      <DateField source="created_at" label="Created At" showTime />

      <FunctionField
        label="Sum"
        source="sum"
        render={(record: Orders) => `${record.sum}$`}
      ></FunctionField>
    </Datagrid>
  </List>
);
