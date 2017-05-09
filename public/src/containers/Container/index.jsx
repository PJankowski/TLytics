import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Container.css';

function Container({ children, centered }) {
  const containerClass = classnames({
    Container: true,
    'Container--center': centered,
  });
  return (
    <div className={containerClass}>
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
  centered: PropTypes.bool,
};

Container.defaultProps = {
  centered: false,
};

export default Container;
