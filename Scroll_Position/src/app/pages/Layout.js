import React, { Component, cloneElement } from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
          {cloneElement(this.props.children, this.props)}
        <Footer />
      </div>
    );
  }
}

export default connect(({auth}) => ({auth}))(Layout);
