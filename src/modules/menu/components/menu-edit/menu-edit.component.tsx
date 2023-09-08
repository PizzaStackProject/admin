import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";


export const MenuEdit = () => {

  return (
    <Edit title={<MenuEditTitle/>}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" fullWidth/>
        <TextInput source="image" fullWidth/>
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" />
        <NumberInput source="weight" />
      </SimpleForm>
    </Edit>
  );
};
