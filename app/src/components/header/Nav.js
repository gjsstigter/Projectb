import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="region-nav">
        <section className="account-login">
          <Link className="create-account" to={`/`}>
            Maak een account
          </Link>
          <Link to={`/`} classname="login">
            Login
          </Link>
        </section>
        <section className="navigation">
          <h1>Project B</h1>
          <ul className="navigation-links">
            <li className="link">
              <Link to={`/`}>Login</Link>
            </li>
            <li className="link">
              <Link to={`/`}>Login</Link>
            </li>
            <li className="link">
              <Link to={`/`}>Login</Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default Nav;
