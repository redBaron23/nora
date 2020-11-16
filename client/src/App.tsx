import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Gallery } from "./hooks/Gallery"
import { withSideBar } from "./hooks/withSideBar"


function App() {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
}

export default withSideBar(App);
