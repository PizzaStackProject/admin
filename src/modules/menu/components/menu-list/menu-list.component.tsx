import { Datagrid, Edit, EditButton, FunctionField, List, NumberField, ReferenceField, ReferenceInput, SelectInput, TextField, TextInput } from "react-admin";
import { MenuListExpand } from "../menu-list-expand/menu-list-expand.component";
import { Menu } from "@app/core/types";

const filters = [
  <TextInput source="title" label="Search" />,
  <ReferenceInput source="category_id" reference="category">
    <SelectInput optionText="title" label={"Category"} />
  </ReferenceInput>
]

export const MenuList = () => {
  return (
    <List filters={filters} exporter={false}>
      <Datagrid
        rowClick="expand"
        expand={MenuListExpand}
        bulkActionButtons={false}
      >
        <TextField source="title" />
        <ReferenceField source="category_id" reference="category" link={false}>
          <TextField source="title" />
        </ReferenceField>
        <FunctionField
          label="price"
          render={(record: Menu) => `${record.price}`}
        ></FunctionField>
        <EditButton />
      </Datagrid>
    </List>
  );
};
