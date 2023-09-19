import { Datagrid, List, TextField } from "react-admin";

export const CategoriesList = () => {
  return (
    <List exporter={false}>
      <Datagrid rowClick="edit" bulkActionButtons={false}>
        <TextField source="title" label="Title" />
      </Datagrid>
    </List>
  );
};