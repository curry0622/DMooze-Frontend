import React from 'react';
import classNames from 'classnames';
import NavLink from './link';

const Nav = () => (
  <div className={classNames('nav-container')}>
    <NavLink path="/" name="DMooze" />
    <div className={classNames('nav-links')}>
      <NavLink path="/projects" name="PROJECTS" />
      <NavLink path="/mooze" name="START YOUR MOOZE" />
    </div>
  </div>
);

export default Nav;
