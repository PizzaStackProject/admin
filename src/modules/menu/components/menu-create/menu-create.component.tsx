import { Create, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input";

export const MenuCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <CloudinaryInput source="" label={"New photo"} />
        <ReferenceInput source="category_id" reference="category">
          <SelectInput optionText="title" label={"Category"} />
        </ReferenceInput>
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" />
        <NumberInput source="weight" />
      </SimpleForm>
    </Create>
  );
};
