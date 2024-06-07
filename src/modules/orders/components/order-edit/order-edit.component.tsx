import { ReferenceInput, SelectInput } from "react-admin";

import { Edit, SimpleForm, TextInput } from "react-admin";

export const OrderEdit = () => (
  <Edit mutationMode="pessimistic">
    <SimpleForm>
      <TextInput source="client_address" label="Client Address" />
      <TextInput source="client_name" label="Client Name" />
      <TextInput source="client_phone" label="Client Phone" />
      <TextInput source="id" />
      <ReferenceInput reference="order_status" source="status" label="Status">
        <SelectInput optionText="label" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
