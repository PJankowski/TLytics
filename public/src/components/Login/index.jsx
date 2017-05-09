import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import loginAction from '../../actions/AuthActions';

import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.login = this.login.bind(this);
  }

  login(evt) {
    evt.preventDefault();

    const user = {
      username: this.usernameRef.value,
      password: this.passwordRef.value,
    };

    this.props.dispatch(loginAction(user))
      .then(() => {
        this.props.history.push('/dashboard');
      });
  }

  render() {
    return (
      <form className="Login" onSubmit={this.login}>
        <h1>Login</h1>
        <input type="text" placeholder="Username:" ref={(ref) => { this.usernameRef = ref; }} />
        <input type="password" placeholder="Password:" ref={(ref) => { this.passwordRef = ref; }} />
        <button type="submit">Login</button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object,
  dispatch: PropTypes.func,
};

Login.defaultProps = {
  history: {},
  dispatch: () => {},
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Login);
