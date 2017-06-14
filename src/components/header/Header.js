import React from 'react';
import Nav from '../nav/Nav';
import './Header.css';
import logo from './logo.svg';

class Header extends React.Component {

  render() {
    return (
      <div className='header'>
        <h1>CARA CHEW</h1>
        <img src={logo} className="logo" alt="carachew" onClick={() => this.props.changeActiveDiv('none')} />
        <Nav changeActiveDiv={this.props.changeActiveDiv}/>
      </div>
    );
  }

}

export default Header;
