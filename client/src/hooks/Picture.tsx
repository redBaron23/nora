import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { IPicture } from "../interfaces"

interface Props {
  picture: IPicture;
}


const openDialog = (picture: IPicture) => {
  alert(picture.src);
}

export const Picture: React.FC<Props> = ({ picture }) => {
  return (
    <div onClick={() => openDialog(picture)}>
      <Image rounded size="big" src={picture.src} />
      <div className="bg-dark text-white">{picture.title}</div>
    </div>
  );
};
