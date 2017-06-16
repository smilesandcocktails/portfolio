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
          <p className='aboutmePara'>Hey there!
            <br />
            <br />
            Welcome to my web development portfolio!
            <br />
            <br />
            I am a full stack marketer && a full stack developer. Besides being a traditional & digital marketing strategist with 10 years of experience, I also design and develop web applications.
            <br />
            <br />
            When I'm not working, I love to travel, paint, practice taiji, and go to the gym. Feel free to drop me a line!</p>
            <br />
          <div className='aboutMeIcons'>
            <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/smilesandcocktails'><img src='https://i.imgur.com/OqQziE6.jpg' className='
            icons'></img></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/smilesandcocktails'><img src='https://i.imgur.com/b4ihaFT.png' className='
            icons'></img></a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/carachew'><img src='https://i.imgur.com/dZ91EsA.png' className='
            icons'></img></a>
        </div>
        </div>
      </div>
    );
  }

}

export default Aboutme;
