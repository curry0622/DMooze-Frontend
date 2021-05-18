import React from 'react';
import classNames from 'classnames';
import NavLink from './link';

const Nav = () => (
  <div className={classNames('nav-container')}>
    <NavLink path="/" name="DMooze" type="--home" />
    <div className={classNames('nav-links')}>
      {/* <NavLink path="/projects" name="關於我們" /> */}
      {/* <NavLink path="/projects" name="智能合約" /> */}
      <NavLink path="/projects" name="提案們" />
      <NavLink path="/mooze" name="Start Moozing" type="--mooze" />
    </div>
  </div>
);

export default Nav;
