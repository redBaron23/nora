import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import { getPictures } from "../fun/storageHandler";
import { Divider } from "semantic-ui-react";
import { PictureModal } from "./PictureModal"
import { IPicture } from "../interfaces"



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
          {pictures.map((i) => (
            <Col xs="12" sm="6" md="6" lg="6" xl="4">
              <PictureModal picture={i} />
              <Divider hidden />
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};
