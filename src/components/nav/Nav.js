import React from 'react';
import './Nav.css';

class Nav extends React.Component {

  render() {
    return (
      <div className='navDiv'>
        <ul className='nav'>
          <li className='navItems' onClick={() => this.props.changeActiveDiv('aboutme')}>About Me</li>
          <li className='navItems' onClick={() => this.props.changeActiveDiv('portfolio')}>Portfolio</li>
        </ul>
      </div>
    );
  }

}

export default Nav;
