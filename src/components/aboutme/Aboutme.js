import React from 'react';
import './Aboutme.css';


class Aboutme extends React.Component {

  render() {
    return (
      <div className='content' style={this.props.active !== 'none' ? {height: '100%'} : {height: '0', overflow: 'hidden'}}>
        <div className='left'>
          <img src='https://i.imgur.com/WRNTqMG.jpg' alt="Cara Chew" className='me' style={this.props.active !== 'none' ? {height: '100%'} : {height: '0', overflow: 'hidden'}}></img>
        </div>
        <div className='right'>
          <p>Hey there! <br />Welcome to my web development portfolio! I design and develop web applications. </p>
          <div class='aboutMeIcons'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/smilesandcocktails'><img src='https://i.imgur.com/BxElD85.jpg' className='
            icons'></img></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/smilesandcocktails'><img src='https://i.imgur.com/t8tYjLd.png' className='
            icons'></img></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/carachew'><img src='https://i.imgur.com/xSfvxtd.png' className='
            icons'></img></a>
        </div>
        </div>
      </div>
    );
  }

}

export default Aboutme;
