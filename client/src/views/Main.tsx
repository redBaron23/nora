import React from "react";
import { Gallery } from "../hooks/Gallery";
import { withSideBar } from "../hooks/withSideBar";

import { useSelector, useDispatch } from "react-redux";
import { LogInState } from "../logInReducer";
import { logIn } from "../actions";

// import {Button } from "semantic-ui-react";

interface Props {}

const Main: React.FC<Props> = () => {
  const logged = useSelector<LogInState, LogInState["logIn"]>(
    (state) => state.logIn
  );
  const dispatch = useDispatch();

  const onLogIn = (logged: boolean) => {
    dispatch(logIn(logged));
  };

  return (
    <div>
      {/*   <Button type="submit" onClick={() => onLogIn(true)}>
        Enviar
   </Button>*/}
      {console.log("logeado?", logged)}
      <Gallery />
    </div>
  );
};
export default withSideBar(Main);
