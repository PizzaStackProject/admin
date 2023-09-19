import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input";


export const MenuEdit = () => {

  return (
    <Edit title="Create new menu item" mutationMode="pessimistic">
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" fullWidth />
        <CloudinaryInput source="image" label={"Photo"} />
        <ReferenceInput source="category_id" reference="category">
          <SelectInput optionText="title" label={"Category"} />
        </ReferenceInput>
        <TextInput source="ingredients" fullWidth />
        <NumberInput source="price" />
        <NumberInput source="weight" />
      </SimpleForm>
    </Edit>
  );
};
