import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoaderHOC from 'HOC/Loader';

import './Dashboard.css';

function Dashboard({ user }) {
  return (
    <div>
      <h1>Welcome { user.display_name }!</h1>
    </div>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object,
};

Dashboard.defaultProps = {
  user: {},
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
