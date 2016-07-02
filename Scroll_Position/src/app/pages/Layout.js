import React, { Component } from 'react';
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
          {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
