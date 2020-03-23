import React, { Component } from "react";
import "./nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className='nav-main'>
        <div className='logo'></div>
        <div className='menu'>
          <ul className='menu-items__list'>
            <li className='menu-item'>
              <a href='' className='menu-link'>
                Home
              </a>
            </li>
            <li className='menu-item'>
              <a href='' className='menu-link'>
                Films
              </a>
            </li>
            <li className='menu-item'>
              <a href='' className='menu-link'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='account'></div>
      </nav>
    );
  }
}

export default Nav;
