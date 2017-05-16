import React from 'react';

import NavItem from 'Components/NavItem';

import './NavItems.css';

function NavItems() {
  return (
    <div className="NavItems">
      <NavItem path="/dashboard" text="Links" />
      <NavItem path="/dashboard" text="Links" />
      <NavItem path="/dashboard" text="Links" />
    </div>
  );
}

export default NavItems;
