import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/pages/Home";
import FilmItem from "./components/pages/Filmitem"
import Header from "./components/header/Header";
import Filmitem from "./components/pages/Filmitem";
import Contact from "./components/pages/Contact";
import './assets/sass/_main.scss'
import Admin from "./components/pages/Admin";
import Films from "./components/pages/Films";

class App extends Component {

    // LoginStatus = (id, uname, upass) => {
    //     return (id && uname && upass) ?  true : false;
    // }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path={`/`} exact component={Home}/>
                        <Route path={[`/admin/:page/:crud/:id`, `/admin/:page/:crud/`, `/admin/:page/`, `/admin/`, `/:page/:crud`]} component={Admin}/>
                        <Route path={`/film/:id`} component={Filmitem}/>
                        <Route path={`/films`} component={Films}/>
                        <Route path={`/contact`} component={Contact}/>
                        <Redirect path={`*`} to={`/`}/>
                    </Switch>
                </div>
            </Router>
    );
  }
}

export default App;
