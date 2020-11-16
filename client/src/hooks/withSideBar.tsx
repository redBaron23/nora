import React, {useState} from "react";
import {
  Button,
  Image,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

// First we need to add a type to let us extend the incoming component.

const handleOpen = () => {

}

// Mark the function as a generic using P (or whatever variable you want)
export function withSideBar<P>(
  // Then we need to type the incoming component.
  // This creates a union type of whatever the component
  // already accepts AND our extraInfo prop
  Content: React.ComponentType<P>
) {

  const ContentWithSideBar = (props: P) => {
    // At this point, the props being passed in are the original props the component expects.
    const [ openMenu,setOpenMenu ] = useState<boolean>(false);
    return (
      <div>
        <Sidebar.Pushable as={Segment}>
          <Menu className="bg-dark">
            <Button icon className="bg-dark" >
              <Icon name="bars" size="huge" className="text-light" />
            </Button>
          </Menu>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            vertical
            visible={false}
            className="bg-dark"
            width="wide"
          >
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
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
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
