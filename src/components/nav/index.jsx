import React from 'react';
import classNames from 'classnames';
import NavLink from './link';

const Nav = () => (
  <div className={classNames('nav-container')}>
    <NavLink path="/" name="DMooze" />
    <div className={classNames('nav-links')}>
      <NavLink path="/projects" name="專案們" />
      <NavLink path="/mooze" name="Start Moozing" />
    </div>
  </div>
);

export default Nav;
