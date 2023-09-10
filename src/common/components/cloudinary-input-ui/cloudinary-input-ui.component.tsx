import { cloudinary } from "@app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import { FC, useRef } from "react";

interface CloudinaryInputUIProps {
  label: string;
  disabled: boolean;
  value?: string;
  onImageSelected: (image: File) => void;
}

const cutImageName = (value: string) => {
  const split = value.split("/");
  const imageName = split[split.length - 2] + "/" + split[split.length - 1];
  return imageName;
};

export const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({
  label,
  disabled,
  onImageSelected,
  value,
}) => {
  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!event.target.files) return;

    const [file] = Array.from(event.target.files);

    onImageSelected(file);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadClick = () => {
    inputRef.current?.click();
  };

  const image = cloudinary.image(cutImageName(value ?? " "));

  image.addTransformation('w_384,h_247,dpr_2.0');

  return (
    <div style={{ marginBottom: 20 }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={onFileInputChange}
      />
      <Card variant="outlined">
        <CardHeader title={label}> </CardHeader>
        <CardContent>
          {value  ? (
            <AdvancedImage cldImg={image} width={384} height={247} />
          ) : (
            <img src="https://placehold.co/384x247?text=No+Image" alt="" width={384} height={247} />
          )}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={onUploadClick}
            disabled={disabled}
          >
            <Typography> Download</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
