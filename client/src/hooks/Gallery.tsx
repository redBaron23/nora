import React, { useState, useEffect } from "react";
import { Picture, IPicture } from "./Picture";
import { Container, Col,Row, CardGroup } from "react-bootstrap";

interface IProps {}

export const Gallery: React.FC<IProps> = () => {
  const [pictures, setPictures] = useState<IPicture[]>([]);

  useEffect(() => {
    let picture: IPicture = {
      src:
        "https://acf.geeknetic.es/imgri/imagenes/auto/20/09/25/31w-win-xps-w00w.png?f=webp",
      id: 52,
      description: "Esto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askhEsto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askhEsto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askhEsto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askhEsto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askhEsto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askhEsto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askhEsto es uasidjas sdasd asd asd asdas djas kdhasjk dhkajs hdkjas hdkjash kdjahs kjahdkashd kasdkj ahskd askh ",
      title: " Fasodjas ioajsoidas",
    };
    setPictures([picture, ...pictures]);
    picture = {
      src:"https://image.shutterstock.com/image-vector/abstract-background-random-size-square-600w-667693297.jpg",
      id: 52,
      description: "Tumasmama",
      title: "fas",
    };
    
  }, []);

  return (
    <div >
      <Container fluid={true}>
        <div className="row"  >
          {pictures.map((i) => (
            <Col xs="12" sm="6" md="4" lg="3" >
              <Picture  picture={i} />
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};
