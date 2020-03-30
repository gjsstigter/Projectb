import React, {Component} from "react";
import Slider from "./Slider";
import Nav from "./Nav";

class Header extends Component{
    render() {
        return(
            <header id={`masthead`} className={`site-header header-default  light`}>
                <Nav/>
                <Slider/>
            </header>
        );
    }
}

export default Header;