import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import  Main  from "./views/Main"
import LogIn from "./views/LogIn"
import Contact from "./views/Contact"
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/home" component={Main} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App
