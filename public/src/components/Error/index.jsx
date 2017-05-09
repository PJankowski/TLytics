import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Error.css';

function Error({ error }) {
  return (
    <div className="Error">
      <p>{error.message}</p>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.object,
};

Error.defaultProps = {
  error: {},
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Error);
