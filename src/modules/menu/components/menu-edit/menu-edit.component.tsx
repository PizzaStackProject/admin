import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";


export const MenuEdit = () => {
  return (
    <Edit>
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
