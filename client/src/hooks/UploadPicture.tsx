import React, { useState } from "react";
import ImageUploader from "react-images-upload";
import { uploadPictures, getPictures } from "../fun/storageHandler";
import { Input, Form, Button } from "semantic-ui-react";
import ImageCropper from "./ImageCropper"

interface Props {}

type changeEvent = React.ChangeEvent<HTMLInputElement>;

export const UploadPicture: React.FC<Props> = () => {
  const handleFile = (event: changeEvent) => {
    console.log(event);
  };

  const [picture, setPicture] = useState<File>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onSubmit = () => {
    uploadPictures(picture, title, description);
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <Input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo"
          />
        </Form.Field>
        <Form.TextArea
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          placeholder="Da una descripcion sobre el cuadro que estas publicando..."
        />
        <Form.Field>
          <ImageCropper />
        </Form.Field>

        <Button type="submit" onClick={onSubmit}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};
