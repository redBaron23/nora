import React, { useState } from "react";
import Amplify, { Storage } from "aws-amplify";
import config from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import ImageUploader from "react-images-upload";
import { uploadPictures, getPictures } from "../fun/storageHandler";
import { Input, Form, Button } from "semantic-ui-react";
import { withSideBar } from "../hooks/withSideBar";
Amplify.configure(config);

interface Props {}

type changeEvent = React.ChangeEvent<HTMLInputElement>;

const LogIn: React.FC<Props> = () => {
  const handleFile = (event: changeEvent) => {
    console.log(event);
  };

  const [picture, setPicture] = useState<File>();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  const onSubmit = () => {
    uploadPictures(picture,title,description)
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
          <ImageUploader
            withIcon={true}
            label="Cuadro a subir"
            onChange={(f) => setPicture(f[0])}
            singleImage={true}
            imgExtension={[".jpg", ".jpeg", ".png", ".gif"]}
          />
        </Form.Field>

        <Button type="submit" onClick={onSubmit}>
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default withSideBar(withAuthenticator(LogIn));
