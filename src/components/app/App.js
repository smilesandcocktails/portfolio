import React, { Component } from 'react';
import Header from '../header/Header';
import Works from '../works/Works';
import Aboutme from '../aboutme/Aboutme';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'none'
    }
    this.changeActiveDiv = this.changeActiveDiv.bind(this)
  }

  changeActiveDiv(e) {
    this.setState({
      active: e
    })
  }

  render() {
    return (
      <div className="AppContainer">
        <div className='headerDiv'>
          <Header changeActiveDiv={this.changeActiveDiv} />
        </div>


          <div className={'aboutme ' + (this.state.active === 'aboutme' ? 'expandedaboutme' : 'notexpanded')}>
            <Aboutme />
          </div>


          <div className={'contentDiv ' + (this.state.active === 'portfolio' ? 'expandedportfolio' : 'notexpanded')}>
            <Works />
          </div>

        <p className='footer'>carachew@gmail.com</p>
      </div>
    );
  }
}

export default App;
