import { Datagrid, Edit, EditButton, FunctionField, List, NumberField, TextField, TextInput } from "react-admin";
import { MenuListExpand } from "../menu-list-expand/menu-list-expand.component";
import { Menu } from "@app/core/types";

const filters = [
  <TextInput source="title" label="Search" alwaysOn />,
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
        <FunctionField
          label="price"
          render={(record: Menu) => `${record.price}`}
        ></FunctionField>
        <NumberField source="price" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
