import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from "./components/pages/Home";
import Header from "./components/header/Header";
import P404 from "./components/pages/P404";
import './assets/scss/All.scss'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route component={P404}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}


export default App;
