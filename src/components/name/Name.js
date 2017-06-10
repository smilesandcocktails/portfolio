import React from 'react';
import './Name.css';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfWho: 0,
      who: ['A Marketing Strategist', 'Who Is A', 'Full Stack Developer']
    }
    this.changeWho = this.changeWho.bind(this)
  }

  changeWho() {

    let length = this.state.who.length

    if (this.state.indexOfWho < length - 1) {
      this.setState ({
        indexOfWho: this.state.indexOfWho + 1
    })
    }
    else {
      this.setState ({
        indexOfWho: 0
    })
    }
  }

  insta () {
    window.open('https://www.instagram.com/smilesandcocktails', '_blank')
  }

  componentDidMount () {
    setInterval(this.changeWho, 1000)
  }

  render() {
    return (
      <div >
        <h1>Cara Chew</h1>
        {/* <p className="descriptionDiv"> {this.state.who[this.state.indexOfWho]}</p> */}
      </div>
    );
  }

}

export default Name;
