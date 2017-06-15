import React from 'react';
import Greynav from '../greynav/Greynav';
import './Works.css';

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfWorks: 0,
      writeUp: ['Need something to do while waiting for someone? Chill here with this awesome word game. All you have to do is to figure out the concealed 1-word puzzle by either guessing each letter at a time, or typing in the entire word to solve. You have 60 seconds to guess each word to get scored. Enjoy!','TABChecker helps you keep track of your I.O.U.s!', 'We created Cache as a way for savers to earn a very high risk-free return, like interest from a bank savings account. Except that "interest" comes in the form of rewards from consumer partners that want younger consumers to come through their doors.People in our plan can earn as much as 12% on each dollar they save over the course of a year! That is real savings that can be spent on great consumer partners. And we even give them 25% of those savings in cash back!', 'TouchType was created with the objective to teach the visually impaired community how to type on the QWERTY keyboard focused on using audio instructions. This application can also be used by anyone who has not learnt touch typing and may want to learn to do so. There are currently 8 chapters teaching users how to position their hands at the home row keys and teaching them every alphabet letter on the QWERTY keyboard.'],
      game: ['https://smilesandcocktails.github.io/wdi-project-1-smilesandcocktails/', 'https://tabchecker.herokuapp.com/', 'https://cachesg.herokuapp.com', 'https://touchtype1.herokuapp.com'],
      repo: ['https://github.com/smilesandcocktails/wdi-project-1-smilesandcocktails','https://github.com/smilesandcocktails/tabchecker','https://github.com/smilesandcocktails/wdi-project-3-underdogs','https://github.com/smilesandcocktails/touchtype'],
      imgur: ['http://i.imgur.com/dQtqZZi.png', 'http://i.imgur.com/suUQbVE.jpg', 'http://i.imgur.com/Xu4Xh63.jpg', 'http://i.imgur.com/u50GfFI.jpg']
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
      <div className='worksParent' style={this.props.active !== 'none' ? {height: '100%'} : {height: '0', overflow: 'hidden'}}>
        <Greynav chosenWork={this.chosenWork} workIndex={this.state.indexOfWorks}/>
        <div className='worksDiv'>
          <div className='thumbnail'>
              <a target='_blank' rel='noopener noreferrer' href={this.state.game[this.state.indexOfWorks]}>
                <img className='portfolioImage' src={this.state.imgur[this.state.indexOfWorks]} style={this.props.active !== 'none' ? {height: '80%'} : {height: '0', overflow: 'hidden'}}></img>
              </a>
          </div>
          <div className='writeup'>
            <p>{this.state.writeUp[this.state.indexOfWorks]} </p>
            <div><a target='_blank' rel='noopener noreferrer' href={this.state.repo[this.state.indexOfWorks]}><img src='https://i.imgur.com/t8tYjLd.png' className='
            icons'></img></a></div>
          </div>
        </div>
      </div>
    );
  }

}

export default Works;
