import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Main  from "./views/Main"
import LogIn from "./views/LogIn"

function App() {
  return (
    <div className="App">
      <LogIn />
      <Main />
    </div>
  );
}

export default App
