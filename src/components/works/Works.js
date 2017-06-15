import React from 'react';
import Greynav from '../greynav/Greynav';
import './Works.css';

const writeUp = [
  'Need something to do while waiting for someone? Chill here with this awesome word game. All you have to do is to figure out the concealed 1-word puzzle by either guessing each letter at a time, or typing in the entire word to solve. You have 60 seconds to guess each word to get scored. Enjoy!',
  'TABChecker helps you keep track of your I.O.U.s. Inspired by our frequent General Assembly class outings, this app helps to keep track of how much each person owes the one who foots the bill!',
  'Cache is built as a group project for savers to earn interest on monthly savings put into their Cache accounts. Gamification is injected into this project to entice youths to save as well. With every top-up, reward dollars are earned and can be spent on Cache retailers and you can keep track via the progress bars.',
  'TouchType was created with the objective of teaching the visually impaired community how to type on the QWERTY keyboard focused on using audio instructions. There are currently 8 chapters teaching users how to position their hands at the home row keys and teaching them every alphabet letter on the QWERTY keyboard.'
]

const game = [
  'https://smilesandcocktails.github.io/wdi-project-1-smilesandcocktails/',
  'https://tabchecker.herokuapp.com/',
  'https://cachesg.herokuapp.com',
  'https://touchtype1.herokuapp.com'
]

const repo = [
  'https://github.com/smilesandcocktails/wdi-project-1-smilesandcocktails',
  'https://github.com/smilesandcocktails/tabchecker',
  'https://github.com/smilesandcocktails/wdi-project-3-underdogs',
  'https://github.com/smilesandcocktails/touchtype'
]

const imgur = [
  'http://i.imgur.com/dQtqZZi.png',
  'http://i.imgur.com/suUQbVE.jpg',
  'http://i.imgur.com/Xu4Xh63.jpg',
  'http://i.imgur.com/u50GfFI.jpg'
]

const builtWith = [
  ['devicon-javascript-plain','devicon-html5-plain-wordmark','devicon-css3-plain-wordmark'],
  ['devicon-heroku-original-wordmark', 'devicon-nodejs-plain-wordmark skillIcon','devicon-mongodb-plain-wordmark','devicon-javascript-plain','devicon-html5-plain-wordmark','devicon-css3-plain-wordmark', 'devicon-express-original-wordmark skillIcon'],
  ['devicon-heroku-original-wordmark', 'devicon-ruby-plain-wordmark', 'devicon-rails-plain-wordmark', 'devicon-postgresql-plain-wordmark', 'devicon-javascript-plain','devicon-html5-plain-wordmark','devicon-css3-plain-wordmark', 'devicon-google-plain'],
  ['devicon-heroku-original-wordmark', 'devicon-nodejs-plain-wordmark skillIcon', 'devicon-javascript-plain','devicon-html5-plain-wordmark','devicon-css3-plain-wordmark', 'devicon-jquery-plain-wordmark', 'devicon-express-original-wordmark skillIcon']
]

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfWorks: 0,
      writeUp: writeUp,
      game: game,
      repo: repo,
      imgur: imgur,
      builtWith: builtWith
    }
    this.chosenWork = this.chosenWork.bind(this)
  }

  chosenWork(e) {
    this.setState({
      indexOfWorks: e
    })
  }

  builtWith(array){
    return array.map((item) => {
      return <i className={item} />
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
            <p className='portfolioPara'>{this.state.writeUp[this.state.indexOfWorks]} </p>
            <a target='_blank' rel='noopener noreferrer' href={this.state.repo[this.state.indexOfWorks]}>
              <div className='skillIconDiv'>
                <img src='https://i.imgur.com/b4ihaFT.png' className='
                icons'></img>
                <span className='builtWithText'>Built With:</span>
                {this.builtWith(this.state.builtWith[this.state.indexOfWorks])}
            </div>
          </a>
          </div>
        </div>
      </div>
    );
  }

}

export default Works;
