import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Error from '../../components/Error';

import Login from '../../components/Login';
import Dashboard from '../Dashboard';

import './App.css';

@connect(store => store)
class App extends Component {
  render() {
    return (
      <div className="App">
        { this.props.error.active ? <Error /> : null }
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }
}

export default App;
