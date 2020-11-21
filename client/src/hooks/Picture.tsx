import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export interface IPicture {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface Props {
  picture: IPicture;
}

export const Picture: React.FC<Props> = ({ picture }) => {
  return (
    <Image
      src={picture.src}
      class="img-fluid img-thumbnail"
      wrapped
      ui={false}
    />
  );
};
