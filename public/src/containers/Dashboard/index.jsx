import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getDashboardData from '../../actions/DashboardActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(this.props.getDashboardData());
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Welcome { user.display_name }!</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  getDashboardData: PropTypes.func,
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getDashboardData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
