import { useManyToManyInput } from "@app/common/hooks/useManyToManyInput";
import { useRef } from "react";
import { OrderForm } from "../../order.types";
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  useRedirect,
} from "react-admin";
import { ManyToManyInput } from "@app/common/components/many-to-many-input/many-to-many-input";
import { Order_Status_Enum } from "@app/core/types";

export const OrderCreate = () => {
  const { mutateJoinResource, fieldsProps } = useManyToManyInput({
    joinResource: "orders_menu",
    resourceField: "order_id",
    referenceField: "menu_id",
  });

  const newReferences = useRef<string[]>([]);
  const transform = (data: OrderForm) => {
    newReferences.current = data.joined_orders_menu;
    return data;
  };

  const redirect = useRedirect();
  const onSuccess = async (data: Omit<OrderForm, "joined_orders_menu">) => {
    await mutateJoinResource({
      id: data.id,
      newReferences: newReferences.current,
    });

    redirect("show", "orders", data.id);
  };

  return (
    <Create
      title="New order"
      transform={transform}
      mutationOptions={{ onSuccess }}
    >
      <SimpleForm>
        <TextInput source="client_address" label="Client Address" fullWidth />
        <TextInput source="client_name" label="Client Name" />
        <TextInput source="client_phone" label="Client Phone" />
        <ReferenceInput reference="order_status" source="status" label="Status">
          <SelectInput
            optionText="label"
            defaultValue={Order_Status_Enum.New}
            disabled
          />
        </ReferenceInput>
        <ManyToManyInput
          label="Menu"
          reference="menu"
          source="joined_orders_menu"
          {...fieldsProps}
        />
      </SimpleForm>
    </Create>
  );
};
