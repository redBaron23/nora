import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import { getPictures } from "../fun/storageHandler";
import { Divider, Image } from "semantic-ui-react";

export interface IPicture {
  id: number;
  src: string;
  title: string;
  description: string;
}

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
              <Image rounded size="big" src={i.src} />
              <div className="bg-dark text-white">{i.title}</div>
              <Divider hidden />
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};
