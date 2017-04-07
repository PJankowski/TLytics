import React, { Component } from 'react';
import { connect } from 'react-redux';

import loginAction from '../../actions/AuthActions';

import './Login.css';

@connect(store => store)

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.login = this.login.bind(this);
  }

  login(evt) {
    evt.preventDefault();

    const user = {
      username: this.usernameRef.value,
      password: this.passwordRef.value
    }

    this.props.dispatch(loginAction(user));
  }

  render() {
    return (
      <form className="Login" onSubmit={this.login}>
        <h1>Login</h1>
        {
          this.props.error.active ? <p>{this.props.error.message}</p> : null
        }
        <input type="text" placeholder="Username:" ref={(ref) => {this.usernameRef = ref;}} />
        <input type="password" placeholder="Password:" ref={(ref) => {this.passwordRef = ref;}} />
        <button type="submit">Login</button>
      </form>
    )
  }
}

export default Login;
