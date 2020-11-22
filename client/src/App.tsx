import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./views/Main";
import LogIn from "./views/LogIn";
import { render } from "react-dom";
import { Router, RouteComponentProps, Link } from "@reach/router";

const App = () => {
  const [logged, setLogged] = useState<boolean>();

  const handleLogout = () => setLogged(false);
  const handleLogin = () => setLogged(true);
  return <div className="App">

    //Agregar rutas

  </div>;
};

export default App;
