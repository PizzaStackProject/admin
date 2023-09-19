import { EditTitle } from "@app/common/components/edit-title/edit-title";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => {
    return (
      <Edit title={<EditTitle source={"title"}/>} mutationMode="pessimistic">
        <SimpleForm>
          <TextInput source="title" label="Title" />
          <TextInput source="slug" label="Slug" />
        </SimpleForm>
      </Edit>
    );
}