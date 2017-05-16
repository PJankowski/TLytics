import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { connect } from 'react-redux';

import Dashboard from '../Dashboard';
import Navbar from '../Navbar';

import Toast from '../../components/Toast';

import './App.css';

function App({ toast }) {
  return (
    <div className="App">
      { toast.active ? <Toast /> : null }
      <Navbar />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  );
}

App.propTypes = {
  toast: PropTypes.object,
};

App.defaultProps = {
  toast: {},
};

const mapStateToProps = (state) => {
  return {
    toast: state.toast,
  };
};

export default connect(mapStateToProps)(App);
