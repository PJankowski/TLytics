import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Toast.css';

function Toast({ toast }) {
  return (
    <div className="Toast">
      <h1>{toast.type}</h1>
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
    toast: state.toast,
  };
};

export default connect(mapStateToProps)(Toast);
