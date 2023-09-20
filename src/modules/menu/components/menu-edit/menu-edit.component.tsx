import { Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from "react-admin";
import { CloudinaryInput } from "@app/common/components/cloudinary-input/cloudinary-input";
import { EditTitle } from "@app/common/components/edit-title/edit-title";


export const MenuEdit = () => {

  return (
    <Edit title={<EditTitle source={"title"} />} mutationMode="pessimistic">
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
