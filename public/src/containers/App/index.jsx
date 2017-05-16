import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Container from 'Containers/Container';
import Dashboard from 'Containers/Dashboard';
import Navbar from 'Containers/Navbar';

import Toast from 'Components/Toast';

import getDashboardData from '../../actions/DashboardActions';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(this.props.getDashboardData());
  }

  render() {
    const { toast } = this.props;
    return (
      <div className="App">
        { toast.active ? <Toast /> : null }
        <Navbar />
        <Container>
          <Route path="/dashboard" component={Dashboard} />
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  toast: PropTypes.object,
  dispatch: PropTypes.func,
  getDashboardData: PropTypes.func,
};

App.defaultProps = {
  toast: {},
  dispatch: () => {},
  getDashboardData: () => {},
};

const mapStateToProps = (state) => {
  return {
    toast: state.toast,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDashboardData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
