import React from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import { Picture } from "./Picture";
import { IPicture } from "../interfaces";
import { CustomIcon } from "./CustomIcon"

interface Props {
  picture: IPicture;
}

export const PictureModal: React.FC<Props> = ({ picture }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
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
        <Modal.Content>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <Image size="large" src={picture.src} wrapped />
              </div>
              <div className="col-6">
                <p>{picture.description}</p>
              </div>
              <div className="col-12">
                <CustomIcon />
              </div>
            </div>
          </div>
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
