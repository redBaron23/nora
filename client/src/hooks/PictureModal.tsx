import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { Picture } from "./Picture";
import { IPicture } from "../interfaces";

interface Props {
  picture: IPicture;
}

export const PictureModal: React.FC<Props> = ({ picture }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div >
      <Modal
        onClose={() => setOpen(false)}
        basic
        className="block-example border border-primary"
        size="fullscreen"
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <div onClick={() => setOpen(true)}>
            <Picture picture={picture} />
          </div>
        }
      >
        <Modal.Header>{picture.title}</Modal.Header>
        <Modal.Content image>
          <Image size="huge" src={picture.src} wrapped />
          <Modal.Description>
            <p>{picture.description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} positive>
            Ok
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
