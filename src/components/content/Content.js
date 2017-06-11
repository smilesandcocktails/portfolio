import React from 'react';
import Aboutme from '../aboutme/Aboutme';
import Works from '../works/Works';
import './Content.css';

class Content extends React.Component {

  render() {
    return (
      <div className='content'>
        {/* <Aboutme /> */}
        <Works />
      </div>
    );
  }

}

export default Content;
