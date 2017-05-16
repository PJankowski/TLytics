import React from 'react';

import NavItem from '../NavItem';

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
