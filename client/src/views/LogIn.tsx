import React, { useState } from "react";
import Amplify, { Hub,Logger } from "aws-amplify";
import config from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { UploadPicture } from "../hooks/UploadPicture";
import { withSideBar } from "../hooks/withSideBar";
Amplify.configure(config);

const logger = new Logger("My-Logger");

const listener = (data:any) => {
  console.log(data);
  switch (data.payload.event) {
    case "signIn":
      logger.info("user signed in entro");
      break;
    case "signUp":
      logger.info("user signed up");
      break;
    case "signOut":
      logger.info("user signed out");
      break;
    case "signIn_failure":
      logger.error("user sign in failed");
      break;
    case "tokenRefresh":
      logger.info("token refresh succeeded");
      break;
    case "tokenRefresh_failure":
      logger.error("token refresh failed");
      break;
    case "configured":
      logger.info("the Auth module is configured");
  }
};

Hub.listen("auth", listener);

interface Props {}

const LogIn: React.FC<Props> = () => {
  return (
    <div>
      <UploadPicture />
    </div>
  );
};

export default withSideBar(withAuthenticator(LogIn));
