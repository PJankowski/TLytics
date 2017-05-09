import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Dashboard extends Component {
  componentDidMount() {
    if (this.props.user.token === '') {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object,
  history: PropTypes.object,
};

Dashboard.defaultProps = {
  user: {},
  history: {},
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Dashboard);
