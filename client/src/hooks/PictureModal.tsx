import React from "react";
import { Button, Icon, Image, Modal, Divider } from "semantic-ui-react";
import { Picture } from "./Picture";
import { IPicture } from "../interfaces";
import { ContactIcons } from "./ContactIcons";

interface Props {
  picture: IPicture;
}

const defaultDescription =
  "Para consultar si este cuadro esta a la venta contacteme a mis redes sociales haciendo click en los iconos. O bien puede enviarme un email a norilla07@yahoo.com.ar";

export const PictureModal: React.FC<Props> = ({ picture }) => {
  const [open, setOpen] = React.useState(false);

  return (
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
      <Modal.Header>
        <p className="text-primary align-self-right">{picture.title}</p>
      </Modal.Header>
      <Modal.Content image>
        <div className="container">
          <Image size="huge" src={picture.src} wrapped />
          <Divider inverted />
          <Modal.Description>
            <p>
              {!!picture.description ? picture.description : defaultDescription}
            </p>
          <ContactIcons />
          </Modal.Description>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={() => setOpen(false)}
          className="bg-primary text-light"
        >
          Cerrar
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
