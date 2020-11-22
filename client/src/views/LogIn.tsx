import React, { useState } from "react";
import Amplify, { Storage } from "aws-amplify";
import config from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { UploadPicture } from "../hooks/UploadPicture"
import { withSideBar } from "../hooks/withSideBar";
Amplify.configure(config);

interface Props {}


const LogIn: React.FC<Props> = () => {

  return (
    <div>
      <UploadPicture />
   </div>
  );
};

export default withSideBar(withAuthenticator(LogIn));
