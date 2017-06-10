import React from 'react';
import './Nav.css';

class Nav extends React.Component {

  render() {
    return (
      <div>
        <ul className='nav'>
          <li className='navItems'>About Me</li>
          <li className='navItems'>PortFolio</li>
        </ul>
      </div>
    );
  }

}

export default Nav;
