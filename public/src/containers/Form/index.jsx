import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { children, onSubmit, className } = this.props;
    return (
      <form className={className} onSubmit={onSubmit}>
        { children }
      </form>
    );
  }
}

Form.propTypes = {
  children: PropTypes.array.isRequired,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
};

Form.defaultProps = {
  onSubmit: () => {},
  className: '',
};

export default Form;
