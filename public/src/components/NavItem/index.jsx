import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NavItem({ path, text }) {
  return (
    <Link to={path}>{text}</Link>
  );
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
