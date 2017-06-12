import React from 'react';
import './Greynav.css';

class Greynav extends React.Component {

  render() {
    return (
      <div className='greynav'>
          <ul className='worksul'>
            <li className='workslist'>The Chill Word Game</li>
            <li className='workslist'>TabChecker</li>
            <li className='workslist'>Cache</li>
            <li className='workslist'>TouchType</li>
          </ul>
      </div>
    );
  }

}

export default Greynav;
