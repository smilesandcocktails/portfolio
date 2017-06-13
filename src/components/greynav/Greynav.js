import React from 'react';
import './Greynav.css';

class Greynav extends React.Component {

  render() {
    return (
      <div className='greynav'>
          <ul className='worksul'>
            <li className='workslist' onClick={() => this.props.chosenWork(0)}>The Chill Word Game</li>
            <li className='workslist' onClick={() => this.props.chosenWork(1)}>TabChecker</li>
            <li className='workslist' onClick={() => this.props.chosenWork(2)}>Cache</li>
            <li className='workslist' onClick={() => this.props.chosenWork(3)}>TouchType</li>
          </ul>
      </div>
    );
  }

}

export default Greynav;
