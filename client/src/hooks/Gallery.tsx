import React, { useState, useEffect } from "react";
import { Picture, IPicture } from "./Picture";
import { Container, Col, Row, CardGroup } from "react-bootstrap";
import { getPictures } from "../fun/storageHandler";
import { Divider, Image } from "semantic-ui-react";

interface IProps {}

export const Gallery: React.FC<IProps> = () => {
  const [pictures, setPictures] = useState<IPicture[]>([]);

  useEffect(() => {
    getPictures().then((pics) => setPictures(pics));
  }, []);

  return (
    <div>
      <Container fluid={true}>
        <div className="row">
          <Image.Group size="large">
            {pictures.map((i) => (
              /*<Col key={i.id} xs="12" sm="6" md="4" lg="4" >*/

              <Picture picture={i} />
            ))}
          </Image.Group>
        </div>
      </Container>
    </div>
  );
};
