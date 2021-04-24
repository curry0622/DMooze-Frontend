import React from 'react';
import classNames from 'classnames';
import NavLink from './link';

const Nav = () => (
  <div className={classNames('nav-container')}>
    <NavLink path="/" name="DMooze" />
    <div className={classNames('nav-links')}>
      <NavLink path="/projects" name="專案" />
      <NavLink path="/mooze" name="開始募款" />
    </div>
  </div>
);

export default Nav;
