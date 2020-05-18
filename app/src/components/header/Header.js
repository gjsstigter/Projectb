import React, { Component } from "react";
import Slider from "./Slider";
import Nav from "./Nav";

class Header extends Component{
    render() {
        return(
            <header>
                <Nav/>
                {/* <Slider/> */}
            </header>
        );
    }
}

export default Header;
