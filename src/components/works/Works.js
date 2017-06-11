import React from 'react';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import './Works.css';

class Works extends React.Component {

  render() {
    return (
      <div>
        <div className='thumbnail'>
            <img src="./1.jpg" alt="The Chill Word Game"></img>
        </div>
        <div className='thumbnail'>
            <img src="./2.jpg" alt="TabChecker"></img>
        </div>
        <div className='thumbnail'>
            <img src="./3.jpg" alt="Cache"></img>
        </div>
        <div className='thumbnail'>
            <img src="./4.jpg" alt="TouchType"></img>
        </div>
      </div>
    );
  }

}

export default Works;
