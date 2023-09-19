import { Create, SimpleForm, TextInput } from "react-admin";

export const CategoryCreate = () => {
  return (
    <Create title="Create category">
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <TextInput source="slug" label="Slug" />
      </SimpleForm>
    </Create>
  );
};
