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

import { Link } from "react-router-dom";

const isLogged = (): boolean => {
  return localStorage.getItem("amplify-signin-with-hostedUI") !== null;
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
    const handleMenu = ():void => {
      setOpenMenu(!openMenu);
    };

    const handleClickContent = ():void => {
      if (breakWidth > width) setOpenMenu(false);
    };

    const handleLogOut = ():void => {
      localStorage.clear();
    }

    return (
      <div>
        <Sidebar.Pushable as={Segment} className="bg-dark">
          <Menu className="d-flex bg-dark">
            <Menu.Item className="p-2">
              <Button className="bg-dark" onClick={handleMenu}>
                <Icon name="bars" size="huge" className="text-light" />
              </Button>
            </Menu.Item>
            {isLogged() && (
              <Menu.Item className="ml-auto p-2" as="a">
                <Link to="/home" className="bg-dark text-light" onClick={() => handleLogOut()}>
                  <Icon
                    name="sign-out alternate"
                    size="big"
                    className="text-light"
                  />
                  Cerrar Sesion
                </Link>
              </Menu.Item>
            )}
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
                <Image
                  src="https://scontent.faep9-1.fna.fbcdn.net/v/t1.0-9/45361435_10216031244081362_351990621654745088_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=01x9bO8ILm0AX8aSKE-&_nc_ht=scontent.faep9-1.fna&oh=3ef8f1d9d7ff8ed8dd289fc90d7ac19f&oe=5FD9CDED"
                  size="small"
                  circular
                  centered
                />
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
          <Sidebar.Pusher onClick={handleClickContent} className="min-vh-100" style={{
          backgroundImage: 'url("https://images.hdqwalls.com/download/brick-wall-5k-cg-1920x1080.jpg")',
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
