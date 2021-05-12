import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NavLink = ({ path, name, type }) => (
  <Link className={classNames(`nav-link${type}`)} to={path}>
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
  type: PropTypes.string,
};

NavLink.defaultProps = {
  type: '',
};

export default NavLink;
