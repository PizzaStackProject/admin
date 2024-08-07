import { getManyReferenceFilter } from "@app/common/data/get-many-reference-filter";
import { FC, useEffect, useState } from "react";
import {
  AutocompleteArrayInput,
  useDataProvider,
  useGetList,
  useRecordContext,
} from "react-admin";
import { useFormContext } from "react-hook-form";

interface ManyToManyInputProps {
  label: string;
  reference: string;
  joinResource: string;
  resourceField: string;
  referenceField: string;
  source: string;
}

export const ManyToManyInput: FC<ManyToManyInputProps> = ({
  label,
  reference,
  joinResource,
  resourceField,
  referenceField,
  source,
}) => {
  const record = useRecordContext();
  const formContext = useFormContext();
  const dataProvider = useDataProvider();

  const choices = useGetList(reference);

  const [chosenValuesIds, setChosenValuesIds] = useState<string[]>([]);
  useEffect(() => {
    if (!record) return;

    const fetchJoinReferences = async () => {
      const chosenValues = await dataProvider.getManyReference(joinResource, {
        id: record.id,
        target: resourceField,
        ...getManyReferenceFilter,
      });

      const chosenValuesIds = chosenValues.data?.map(
        (chosenValue) => chosenValue[referenceField]
      );

      setChosenValuesIds(chosenValuesIds);
    };

    fetchJoinReferences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    formContext.setValue(source, chosenValuesIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenValuesIds]);

  return (
    <AutocompleteArrayInput
      label={label}
      fullWidth
      optionText="title"
      translateChoice={false}
      choices={choices.data ?? []}
      source={source}
    />
  );
};
