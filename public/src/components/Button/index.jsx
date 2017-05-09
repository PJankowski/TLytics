import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './Button.css';

function Button({ onClick, type, text }) {
  const btnClasses = classnames({
    Button: true,
    'Button-primary': type === 'primary',
  });
  return (
    <button className={btnClasses} onClick={onClick}>{ text }</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => {},
  type: '',
};

export default Button;
