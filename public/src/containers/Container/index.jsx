import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Container.css';

function Container({ children, centered, verticalCentered, horizontalCentered, spaceBetween }) {
  const containerClass = classnames({
    Container: true,
    'Container--center': centered,
    'Container--vertical-center': verticalCentered,
    'Container--horizontal-center': horizontalCentered,
    'Container--space-between': spaceBetween,
  });
  return (
    <div className={containerClass}>
      { children }
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  centered: PropTypes.bool,
  verticalCentered: PropTypes.bool,
  horizontalCentered: PropTypes.bool,
  spaceBetween: PropTypes.bool,
};

Container.defaultProps = {
  centered: false,
  verticalCentered: false,
  horizontalCentered: false,
  spaceBetween: false,
};

export default Container;
