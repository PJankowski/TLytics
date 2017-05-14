import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getUser from '../../actions/UserActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(this.props.getUser());
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>Welcome { user.display_name }!</h1>
        <div id="chart" />
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
  getUser: PropTypes.func,
};

Dashboard.defaultProps = {
  user: {},
  dispatch: () => {},
  getUser: () => {},
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
