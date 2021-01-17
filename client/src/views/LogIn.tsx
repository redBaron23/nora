import React, { useState } from "react";
import Amplify, { Hub, Logger } from "aws-amplify";
import config from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { AmplifyAuthenticator, AmplifySignOut,AmplifySignIn } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import { UploadPicture } from "../hooks/UploadPicture";
import { withSideBar } from "../hooks/withSideBar";
Amplify.configure(config);

const LogIn = () => {
  const [authState, setAuthState] = useState<AuthState | null>(null);
  const [user, setUser] = useState<object | null | undefined>(null);

  React.useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div>
      <UploadPicture />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignIn slot="sign-in" hideSignUp={true}></AmplifySignIn>
    </AmplifyAuthenticator>
  );
};

const logger = new Logger("My-Logger");

const listener = (data: any) => {
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

export default withSideBar(LogIn);
