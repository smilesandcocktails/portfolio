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
        <div className='headerDiv' style={this.state.active !== 'none' ? {height: '30vh'} : {height: '50vh'}}>
          <Header changeActiveDiv={this.changeActiveDiv} />
        </div>

        <div className='aboutme' style={this.state.active === 'aboutme' ? {height: '50vh'} : {height: '0', overflow: 'hidden'}}>
          <Aboutme />
        </div>


        <div className={'contentDiv ' + (this.state.active === 'portfolio' ? 'expandedportfolio' : 'notexpanded')}>
          {/* <Works /> */}
        </div>

        <div className='footer' style={this.state.active !== 'none' ? {height: '20vh'} : {height: '50vh'}}>
          carachew@gmail.com</div>
      </div>
    );
  }
}

export default App;
