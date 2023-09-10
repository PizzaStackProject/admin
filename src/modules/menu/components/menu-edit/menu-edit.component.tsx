import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input";


export const MenuEdit = () => {

  return (
    <Edit title={<MenuEditTitle />}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" fullWidth />
        <CloudinaryInput source="image" label={"Photo"} />
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" />
        <NumberInput source="weight" />
      </SimpleForm>
    </Edit>
  );
};
