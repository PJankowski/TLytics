import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import Toast from '../../components/Toast';

import Dashboard from '../Dashboard';

import './App.css';

function App({ error }) {
  return (
    <div className="App">
      { error.active ? <Toast /> : null }
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
