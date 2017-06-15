import React from 'react';
import './Greynav.css';

class Greynav extends React.Component {

  render() {
    return (
      <div className='greynav'>
          <ul className='worksul'>
            <li className='workslist' onClick={() => this.props.chosenWork(0)} style={this.props.workIndex === 0 ? {color: '#f03278'} : {color: '#C2C5C6'}}>The Chill Word Game</li>
            <li className='workslist' onClick={() => this.props.chosenWork(1)} style={this.props.workIndex === 1 ? {color: '#f03278'} : {color: '#C2C5C6'}}>TabChecker</li>
            <li className='workslist' onClick={() => this.props.chosenWork(2)} style={this.props.workIndex === 2 ? {color: '#f03278'} : {color: '#C2C5C6'}}>Cache</li>
            <li className='workslist' onClick={() => this.props.chosenWork(3)} style={this.props.workIndex === 3 ? {color: '#f03278'} : {color: '#C2C5C6'}}>TouchType</li>
          </ul>
      </div>
    );
  }

}

export default Greynav;
