import React, { Component } from 'react';
import Cover from '../cover/Cover';
import Header from '../header/Header';
import Works from '../works/Works';
import Aboutme from '../aboutme/Aboutme';
import './App.css';
import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: logo,
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

        <div className='headerDiv'  style={this.state.active !== 'none' ? {height: '80vh'} : {height: '50vh'}}>
          <Header logo={this.state.logo} changeActiveDiv={this.changeActiveDiv} />
        </div>

        <div className='aboutme' style={this.state.active !== 'none' ? {height: '62vh'} : {height: '0', overflow: 'hidden'}}>

        {this.state.active === 'aboutme' &&
          <Aboutme active={this.state.active}/>
        }
        {this.state.active === 'portfolio' &&
          <Works active={this.state.active} />
        }
        </div>


        <div className='footer' style={this.state.active !== 'none' ? {height: '40vh'} : {height: '35vh'}}>
          <p><a href='mailto:carachew@gmail.com'>carachew@gmail.com</a></p></div>
      </div>
    );
  }
}

export default App;
