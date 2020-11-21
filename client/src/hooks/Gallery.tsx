import React, { useState, useEffect } from "react";
import { Picture, IPicture } from "./Picture";
import { Container, Col,Row, CardGroup } from "react-bootstrap";
import { getPictures } from "../fun/storageHandler"

interface IProps {}

export const Gallery: React.FC<IProps> = () => {
  const [pictures, setPictures] = useState<IPicture[]>([]);

  useEffect(() => {
    getPictures().then( pics => setPictures(pics))
    
  }, []);

  return (
    <div >
      <Container fluid={true}>
        <div className="row"  >
          {pictures.map((i) => (
            <Col key={i.id} xs="12" sm="6" md="4" lg="3" >
              <Picture  key={i.id} picture={i} />
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};
