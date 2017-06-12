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

        {this.state.active === 'aboutme' &&
          <div className='aboutme'>
            <Aboutme />
          </div>
        }

        {this.state.active === 'portfolio' &&
          <div className='contentDiv'>
            <Works />
          </div>
        }
        <p className='footer'>carachew@gmail.com</p>
      </div>
    );
  }
}

export default App;
