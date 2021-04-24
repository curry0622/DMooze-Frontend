import React from 'react';
import classNames from 'classnames';
import NavLink from './link';

const Nav = () => (
  <div className={classNames('nav-container')}>
    <NavLink path="/" name="DMooze" />
    <NavLink path="/projects" name="PROJECTS" />
    <NavLink path="/mooze" name="START YOUR MOOZE" />
  </div>
);

export default Nav;
