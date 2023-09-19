import { source } from "@cloudinary/url-gen/actions/overlay"
import { FC } from "react";
import { useRecordContext } from "react-admin";

interface EditTitle {
    source: string;
}

export const EditTitle:FC<EditTitle> = ({source}) => {
    const record = useRecordContext();

    if(!record) return null;

    return <div>{record[source]}</div>
}