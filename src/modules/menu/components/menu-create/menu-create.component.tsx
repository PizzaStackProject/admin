import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";

export const MenuCreate = () => {
  return (
    <Create >
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <TextInput source="image" fullWidth />
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" />
        <NumberInput source="weight" />
      </SimpleForm>
    </Create>
  );
};
