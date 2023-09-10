import { FC } from "react";
import { InputProps, useNotify, useRecordContext } from "react-admin";
import { CloudinaryInputUI } from "../cloudinary-input-ui/cloudinary-input-ui.component";
import { Menu, useCloudinarySignatureQuery } from "@app/core/types";
import axios, { AxiosError } from "axios";
import { CloudinaryUploadDTO } from "./cloudinary-upload.dto";
import { useController } from "react-hook-form";

export const CloudinaryInput: FC<InputProps> =  ({ label, source }) => {
  const computedLabel = String(label) ?? source;
  const { data: cloudSignature, loading } = useCloudinarySignatureQuery();

  const notify = useNotify();

  const {field: {onChange, value}} = useController({name: source});

  const onImageSelected = async (image: File) => {

    if (!cloudSignature?.cloudinarySignature) {
      return;
    }

    const { cloudName, apiKey, publicId, signature, timestamp } =
      cloudSignature.cloudinarySignature;

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("api_key", apiKey);
    formData.append("public_id", publicId);
    formData.append("signature", signature);
    formData.append("timestamp", String(timestamp));
    formData.append("folder", "menu");

    let data: CloudinaryUploadDTO;
    try {
      ({data} = await axios.post<CloudinaryUploadDTO>(url, formData));
      
    } catch (error) {
      notify((error as AxiosError).message);
    }

    onChange(data!.public_id)
  };

  return (
    <CloudinaryInputUI
      label={computedLabel}
      value={value}
      disabled={loading}
      onImageSelected={onImageSelected}
    />
  );
};