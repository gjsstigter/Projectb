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
          <Link to={`/user/login`} classname="login">
            Login
          </Link>
        </section>
        <section className="navigation">
          <div className="logo">
            {/* <img src="#" alt="Films Euhh logo" /> */}
            <h1>LOGO</h1>
          </div>
          <ul>
            <li className="link">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="link">
              <Link to={`/films/`}>Films</Link>
            </li>
            <li className="link">
              <Link to={`/`}>Contact</Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default Nav;
