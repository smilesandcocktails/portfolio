import React from 'react';
import Nav from '../nav/Nav';
import './Header.css';
import logo from './logo.svg';

class Header extends React.Component {

  render() {
    return (
      <div id="header">
        <img src={logo} className="logo" alt="carachew" />
        <Nav />
      </div>
    );
  }

}

export default Header;
