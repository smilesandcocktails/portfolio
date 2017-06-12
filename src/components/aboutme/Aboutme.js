import React from 'react';
import './Aboutme.css';


class Aboutme extends React.Component {

  render() {
    return (
      <div className='content'>
        <div className='left'>
          <img src={require("./me.jpg")} alt="Cara Chew" className='me'></img>
        </div>
          <div className='right'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
      </div>
    );
  }

}

export default Aboutme;
