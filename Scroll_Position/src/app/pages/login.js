import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {setAuth} from '../reducers/authReducer';

const validLogin = {
  admin: "1234"
};

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
    }
  }
  checkLogin(e) {
    e.preventDefault();
    const {name, password} = this.state;
    if (validLogin[name] === password) {
      this.props.setAuth(true);
    }
  }
  render() {
    if (this.props.auth) {
      return React.Children.only(this.props.children);
    }
    return (
      <div>
        <form onSubmit={this.checkLogin.bind(this)}>
          <input type="text" autoComplete="off" placeholder="name" name="name" onChange={e => this.setState({...this.state, name: e.target.value})}/>
          <input type="password" autoComplete="off" placeholder="password" name="password" onChange={e => this.setState({...this.state, password: e.target.value})}/>
          <button type="submit" className="btn btn-info">Submit
            <Link  to="/"></Link>
          </button>
        </form>
      </div>
    )
  }
}


/* same "({auth}) => ({auth})" below
function(x) {
  const auth = x.auth;
  return {
    auth: auth
  };
}
//////////////////////////*/

const ConnectedLogIn = connect(({auth}) => ({auth}), dispatch => ({setAuth: setAuth(dispatch)}))(LogIn);

export default ConnectedLogIn;
