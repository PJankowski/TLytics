import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getUser from '../../actions/UserActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.dispatch(getUser());
  }

  render() {
    return (
      <div>
        <h1>Welcome { this.props.user.display_name }!</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func,
};

Dashboard.defaultProps = {
  user: {},
  dispatch: () => {},
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Dashboard);
