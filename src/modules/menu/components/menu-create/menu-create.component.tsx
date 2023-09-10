import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import { MenuEditTitle } from "../menu-edit-title/menu-edit-title.component";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input";

export const MenuCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <CloudinaryInput source="" label={"New photo"} />
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" />
        <NumberInput source="weight" />
      </SimpleForm>
    </Create>
  );
};
