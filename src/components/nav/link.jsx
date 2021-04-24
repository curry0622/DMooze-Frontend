import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ path, name }) => (
  <Link
    to={path}
    className={classNames(`nav-link--${path === '/' ? 'home' : 'others'}`)}
  >
    {path === '/' ? (
      <img
        className={classNames('nav-logo')}
        alt="DMooze"
        src={`${process.env.PUBLIC_URL}/nav/logo.png`}
      />
    ) : (
      name
    )}
  </Link>
);

NavLink.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavLink;
