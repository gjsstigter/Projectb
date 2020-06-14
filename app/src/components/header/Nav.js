import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Loginstate} from "../cinema/user/Loginmanager";

class Nav extends Component {
  loginButton = () => {
    if (!Loginstate()) {
      return (
        <Link to={`/user/login`} className="login">
        Login
        </Link>);
    }
  }

  registerButton = () => {
    if (!Loginstate()) {
      return (
          <Link className="create-account" to={`/user/registreren`}>
            Maak een account
          </Link>);
    }
  }

  render() {
    return (
      <nav className="region-nav">
        <section className="account-login">
          {this.registerButton()}
          {this.loginButton()}
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
              <Link to={`/contact/`}>Contact</Link>
            </li>
          </ul>
        </section>
      </nav>
    );
  }
}

export default Nav;
