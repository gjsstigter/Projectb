import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from "./components/pages/Home";
import Nav from "./components/header/Nav";
import P404 from "./components/pages/P404";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav/>


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
