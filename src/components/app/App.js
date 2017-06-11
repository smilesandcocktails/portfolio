import React, { Component } from 'react';
import Header from '../header/Header';
import Content from '../content/Content';

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="AppContainer">
        <div className='headerDiv'>
          <Header />
        </div>
        <div className='contentDiv'>
          <Content />
        </div>
        <p className='footer'>carachew@gmail.com</p>
      </div>
    );
  }
}

export default App;
