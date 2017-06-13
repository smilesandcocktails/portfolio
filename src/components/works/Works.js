import React from 'react';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './0.png';
import Greynav from '../greynav/Greynav';
import './Works.css';

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfWorks: 0,
      writeUp: ['1','2', '3', '4']
    }
    this.chosenWork = this.chosenWork.bind(this)
  }

  chosenWork(e) {
    this.setState({
      indexOfWorks: e
    })
  }

  render() {

    return (
      <div className='worksParent'>
        <Greynav chosenWork={this.chosenWork}/>
        <div className='worksDiv'>
          <div className='thumbnail'>
              <img src={require(`./${this.state.indexOfWorks}.png`)}></img>
          </div>
          <div className='writeup'>
            <p>{this.state.writeUp[this.state.indexOfWorks]} </p>
          </div>
        </div>
      </div>
    );
  }

}

export default Works;
