import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from 'Containers/Container';

import Logo from 'Components/Logo';
import NavItems from 'Components/NavItems';

import './Navbar.css';

function Navbar({ user }) {
  return (
    <nav className="Navbar">
      <Container verticalCentered spaceBetween>
        <Logo />

        <NavItems />
      </Container>
    </nav>
  );
}

Navbar.propTypes = {
  user: PropTypes.object,
};

Navbar.defaultProps = {
  user: {},
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navbar);
