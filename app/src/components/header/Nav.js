import React, {Component} from "react";
import {Link} from "react-router-dom";

class Nav extends Component {

    render() {
        return (
            <nav id={`page`} className={`hfeed site`}>
                <section>
                    <Link to={`/`}>Maak een account</Link>
                    <Link to={`/`}>Login</Link>
                </section>
                <section>
                    <h1>Project B</h1>
                    <ul>
                        <li><Link to={`/`}>Login</Link></li>
                        <li><Link to={`/`}>Login</Link></li>
                        <li><Link to={`/`}>Login</Link></li>
                    </ul>
                </section>
            </nav>
        )
    }
}

export default Nav;