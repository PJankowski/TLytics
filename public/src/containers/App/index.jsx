import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Error from '../../components/Error';

import Login from '../../components/Login';
import Dashboard from '../Dashboard';

import './App.css';

function App({ error }) {
  return (
    <div className="App">
      { error.active ? <Error /> : null }
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

App.propTypes = {
  error: PropTypes.object,
};

App.defaultProps = {
  error: {},
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
