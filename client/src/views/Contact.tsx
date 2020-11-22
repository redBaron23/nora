import React from "react";
import { ContactForm } from "../hooks/ContactForm"
import { withSideBar } from "../hooks/withSideBar"





interface Props {
}

const Contact: React.FC<Props> = () => {
  return (
    <div>
      <ContactForm />
    </div>
  );
};
export default withSideBar(Contact);
