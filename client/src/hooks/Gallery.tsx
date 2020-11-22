import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { getPictures } from "../fun/storageHandler";
import { Divider, Image, Card, CardGroup } from "semantic-ui-react";

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
            <Col xs="12" sm="6" md="4" lg="3">
              <Image rounded size="big" src={i.src} />
              <a>{i.title}</a>
              <Divider hidden/>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};
