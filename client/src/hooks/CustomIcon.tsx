import React from "react";
import { Header, Icon } from "semantic-ui-react";

export const CustomIcon = () => {
  return (
    <div>
      <Header as="h2">
        <Icon.Group size="large">
          <Icon color="green" name="whatsapp" />
        </Icon.Group>
      </Header>
    </div>
  );
};
