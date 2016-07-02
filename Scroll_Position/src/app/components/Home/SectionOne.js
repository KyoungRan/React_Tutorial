import React from 'react';
import Navbar from '../Layout/Navbar';

class SectionOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <section className='cover' id='spytop'>
        <div className='jumbotron'>
          <img src='../app/images/Home/1-B&W_0000_Clouds.png' />
        </div>
      </section>
    )
  }
}

export default SectionOne;
