import React from 'react';
import Nav from '../nav/Nav';
import './Cover.css';

class Cover extends React.Component {

  handleFns() {
    this.props.changeActiveDiv('none');
    this.props.handleOpen()
  }

  render() {
    return (
      <div className='coverDiv'>
        <img src={this.props.logo} className="logo" alt="carachew" onClick={() => this.handleFns()} />
        <Nav changeActiveDiv={this.props.changeActiveDiv}/>
      </div>
    );
  }

}

export default Cover;
