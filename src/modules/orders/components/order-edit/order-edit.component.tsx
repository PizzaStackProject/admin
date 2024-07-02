import { ManyToManyInput } from "@app/common/components/many-to-many-input/many-to-many-input";
import { ReferenceInput, SelectInput } from "react-admin";

import { Edit, SimpleForm, TextInput } from "react-admin";
import { OrderForm } from "../../order.types";
import { useManyToManyInput } from "@app/common/hooks/useManyToManyInput";

export const OrderEdit = () => {
  const { mutateJoinResource, fieldsProps } = useManyToManyInput({
    joinResource: "orders_menu",
    resourceField: "order_id",
    referenceField: "menu_id",
  });

  const transform = async (data: OrderForm) => {
    await mutateJoinResource({
      id: data.id,
      newReferences: data.joined_orders_menu,
    });

    return data;
  };

  return (
    <Edit mutationMode="pessimistic" transform={transform}>
      <SimpleForm>
        <TextInput source="client_address" label="Client Address" />
        <TextInput source="client_name" label="Client Name" />
        <TextInput source="client_phone" label="Client Phone" />
        <TextInput source="id" />
        <ReferenceInput reference="order_status" source="status" label="Status">
          <SelectInput optionText="label" />
        </ReferenceInput>
        <ManyToManyInput
          label="Menu"
          reference="menu"
          source="joined_orders_menu"
          {...fieldsProps}
        />
      </SimpleForm>
    </Edit>
  );
};
