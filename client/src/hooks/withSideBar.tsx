import React, { useState, useLayoutEffect, useEffect } from "react";
import {
  Button,
  Image,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

import background from "../images/background.jpg";
import profile from "../images/profile.jpg";
import { Link } from "react-router-dom";

const isLogged = (): boolean => {
  return localStorage.getItem("amplify-signin-with-hostedUI") !== null;
};

const handleLogOut = (): void => {
  localStorage.clear();
};

const whatsappMessage =
  "Hola estoy interesado/a en un cuadro que vi en su sitio web noraaleman.ar";
const whatsappUrl =
  "https://wa.me/542216359941?text=" + encodeURI(whatsappMessage);

const MainMenu = () => {
  if (isLogged()) {
    return (
      <Menu.Menu position="right">
        <Menu.Item>
          <Link
            to="/home"
            className="bg-dark text-light"
            onClick={() => handleLogOut()}
          >
            <Icon name="sign-out alternate" size="big" className="text-light" />
            Cerrar Sesion
          </Link>
        </Menu.Item>
      </Menu.Menu>
    );
  } else {
    return (
      <Menu.Menu icon pointing secondary position="right">
        <Menu.Item name="whatsapp" onClick={() => window.open(whatsappUrl)}>
          <Icon name="whatsapp" size="big" className="text-success" />
        </Menu.Item>
        <Menu.Item
          name="facebook"
          onClick={() => window.open("https://facebook.com/nora.aleman.5")}
        >
          <Icon name="facebook f" size="big" className="text-primary" />
        </Menu.Item>
        <Menu.Item
          name="instagram"
          onClick={() => window.open("https://www.instagram.com/norilla07/")}
        >
          <Icon name="instagram" size="big" style={{color:'#C13584'}} />
        </Menu.Item>
      </Menu.Menu>
    );
  }
};

const useWindowSize = () => {
  const [size, setSize] = useState<number[]>([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const breakWidth = 3700;

// First we need to add a type to let us extend the incoming component.
// Mark the function as a generic using P (or whatever variable you want)
export function withSideBar<P>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  Content: React.ComponentType<P>
) {
  const ContentWithSideBar = (props: P) => {
    // At this point, the props being passed in are the original props the component expects.
    const [width, height] = useWindowSize();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const showBarButton: string =
      breakWidth > width ? "d-flex justify-content-end" : "invisible";

    useEffect(() => {
      console.log("Prev", openMenu);
      setOpenMenu(width > breakWidth || openMenu);
      console.log(width);
    });
    const handleMenu = (): void => {
      setOpenMenu(!openMenu);
    };

    const handleClickContent = (): void => {
      if (breakWidth > width) setOpenMenu(false);
    };
    return (
      <div>
        <Sidebar.Pushable as={Segment} className="bg-dark">
          <Menu className="d-flex bg-dark">
            <Menu.Item className="p-2">
              <Button className="bg-dark" onClick={handleMenu}>
                <Icon name="bars" size="huge" className="text-light" />
              </Button>
            </Menu.Item>
            <MainMenu />
          </Menu>

          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            vertical
            visible={openMenu}
            className="bg-dark"
            width="wide"
          >
            <div className={showBarButton}>
              <Button className="bg-dark " onClick={handleMenu}>
                <Icon name="close" size="big" className="text-light" />
              </Button>
            </div>
            <Menu.Item as="h1">
              <div>
                <Image src={profile} size="small" circular centered />
                <Header icon textAlign="center">
                  <Header.Content className="text-white">
                    Nora Aleman
                  </Header.Content>
                </Header>
              </div>
            </Menu.Item>
            <Link to="/home" onClick={() => setOpenMenu(false)}>
              <Menu.Item as="a">
                <Icon name="picture" />
                Cuadros
              </Menu.Item>
            </Link>
            <Link to="/contact" onClick={() => setOpenMenu(false)}>
              <Menu.Item as="a">
                <Icon name="mail" />
                Contacto
              </Menu.Item>
            </Link>
            <Link to="/login" onClick={() => setOpenMenu(false)}>
              <Menu.Item as="a">
                <Icon name={isLogged() ? "upload" : "sign-in alternate"} />
                {isLogged() ? "Subir Cuadro" : "Iniciar Sesion"}
              </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher
            onClick={handleClickContent}
            className="min-vh-100"
            style={{
              backgroundImage: "url(" + background + ")",
            }}
          >
            <Segment basic>
              <Header as="h3">
                <Content {...props} />
              </Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  };
  return ContentWithSideBar;
}
