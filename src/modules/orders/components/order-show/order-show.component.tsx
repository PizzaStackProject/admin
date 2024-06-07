import { Menu, Orders } from "@app/core/types";
import {
  ChipField,
  Datagrid,
  FunctionField,
  ReferenceManyField,
} from "react-admin";
import { ReferenceField } from "react-admin";
import { Show, SimpleShowLayout, TextField } from "react-admin";

export const OrderShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="client_address" label="Client Address" />
      <TextField source="client_name" label="Client Name" />
      <TextField source="client_phone" label="Client Phone" />

      <FunctionField
        label="price"
        source="sum"
        render={(record: Orders) => `${record.sum}$`}
      ></FunctionField>

      <ReferenceField reference="order_status" source="status" label="Status">
        <ChipField source="label" />
      </ReferenceField>

      <ReferenceManyField
        reference="orders_menu"
        target="order_id"
        label="Items"
      >
        <Datagrid bulkActionButtons={false}>
          <ReferenceField
            reference="menu"
            source="menu_id"
            label="Title"
            link={false}
          >
            <TextField source="title" />
          </ReferenceField>
          <ReferenceField
            reference="menu"
            source="menu_id"
            label="Price"
            link={false}
          >
            <FunctionField
              label="price"
              render={(record: Menu) => `${record.price}$`}
            ></FunctionField>
          </ReferenceField>
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
);
