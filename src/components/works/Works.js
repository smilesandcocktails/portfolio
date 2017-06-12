import React from 'react';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';
import Greynav from '../greynav/Greynav';
import './Works.css';

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfWorks: 0,
    }
  }

  chosenWork() {

  }

  render() {
    return (
      <div>
        <Greynav />
        <div>


        </div>
        <div className='thumbnail'>
            <img src={require("./1.jpg")} alt="The Chill Word Game"></img>
        </div>
        <div className='thumbnail'>
            <img src={require("./2.jpg")} alt="TabChecker"></img>
        </div>
        <div className='thumbnail'>
            <img src={require("./3.jpg")} alt="Cache"></img>
        </div>
        <div className='thumbnail'>
            <img src={require("./4.jpg")} alt="TouchType"></img>
        </div>
      </div>
    );
  }

}

export default Works;
