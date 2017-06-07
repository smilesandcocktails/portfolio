import React from 'react';
import './Name.css';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexOfWhat: 0,
      what: ['Marketer','Traveller', 'Cancer Survivor', 'Seriously Happy Person']
    }
    this.changeWhat = this.changeWhat.bind(this)
  }

  changeWhat() {

    let length = this.state.what.length

    if (this.state.indexOfWhat < length - 1) {
      this.setState ({
        indexOfWhat: this.state.indexOfWhat + 1
    })
    }
    else {
      this.setState ({
        indexOfWhat: 0
    })
    }
  }

  insta () {
    window.open('https://www.instagram.com/smilesandcocktails', '_blank')
  }

  componentDidMount () {
    setInterval(this.changeWhat, 2000)
  }

  render() {
    return (
      <div >
        <h1><span className="firstName" onClick={(e) => this.insta(e)}>CARA</span><br />CHEW</h1>
        <p className="descriptionDiv">A {this.state.what[this.state.indexOfWhat]} Who Knows How to Code</p>
      </div>
    );
  }

}

export default Name;
