import React from "react";
import { Icon,Menu } from "semantic-ui-react";

const whatsappMessage =
  "Hola estoy interesado/a en un cuadro que vi en su sitio web noraaleman.ar";
const whatsappUrl =
  "https://wa.me/542216359941?text=" + encodeURI(whatsappMessage);


export const ContactIcons = () => {
  return (
    <Menu.Menu icon pointing secondary position="right">
      <Menu.Item name="whatsapp" onClick={() => window.open(whatsappUrl)}>
        <Icon link name="whatsapp" size="big" className="text-success" />
      </Menu.Item>
      <Menu.Item
        name="facebook"
        onClick={() => window.open("https://facebook.com/nora.aleman.5")}
      >
        <Icon link name="facebook f" size="big" className="text-primary" />
      </Menu.Item>
      <Menu.Item
        name="instagram"
        onClick={() => window.open("https://www.instagram.com/norilla07/")}
      >
        <Icon link name="instagram" size="big" style={{ color: "#C13584" }} />
      </Menu.Item>
    </Menu.Menu>
  );
};
