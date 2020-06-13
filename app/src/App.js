import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import FilmItem from "./components/pages/Film-item"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Header from "./components/header/Header";
import P404 from "./components/pages/P404";
import "./assets/sass/_main.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/film-item" exact component={FilmItem} />
            <Route path="/login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <Route component={P404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
