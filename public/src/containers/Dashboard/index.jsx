import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoaderHOC from 'HOC/Loader';

import DashboardHeader from 'Components/DashboardHeader';

import './Dashboard.css';

function Dashboard({ user, channel }) {
  return (
    <DashboardHeader user={user} channel={channel} />
  );
}

Dashboard.propTypes = {
  user: PropTypes.object,
  channel: PropTypes.object,
};

Dashboard.defaultProps = {
  user: {},
  channel: {},
  dispatch: () => {},
  getDashboardData: () => {},
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    channel: state.channel,
  };
};

export default connect(mapStateToProps)(LoaderHOC(Dashboard));
