import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

interface Props {}

export const ContactForm: React.FC<Props> = () => {
  return (
    <div>
      <Form size="huge">
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Nombre"
            placeholder="Nombre"
          />
          <Form.Field
            control={Input}
            label="Email"
            placeholder="tuemail@gmail.com"
          />
        </Form.Group>
        <Form.Group inline>
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Mensaje"
          placeholder="Dejame un mensaje..."
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </div>
  );
};
