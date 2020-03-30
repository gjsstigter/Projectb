import React, {Component} from "react";
import List from "../cinema/movies/List";

class Home extends Component{

    render() {
        return(
            <main>
                <h2>This is the home</h2>
                <List/>
            </main>
        )
    }
}

export default Home;