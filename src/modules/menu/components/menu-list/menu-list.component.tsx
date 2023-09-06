import { Datagrid, List, TextField } from "react-admin";

export const MenuList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <TextField source="price" />
      </Datagrid>
    </List>
  );
};
