import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Toast.css';

function Toast({ toast }) {
  return (
    <div className="Toast">
      <p>{toast.message}</p>
    </div>
  );
}

Toast.propTypes = {
  toast: PropTypes.shape({
    message: PropTypes.string,
  }),
};

Toast.defaultProps = {
  toast: {},
};

const mapStateToProps = (state) => {
  return {
    error: state.error,
  };
};

export default connect(mapStateToProps)(Toast);
