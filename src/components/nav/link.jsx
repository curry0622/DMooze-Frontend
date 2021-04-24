import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ path, name, type }) => (
  <Link to={path} className={classNames(`nav-link${type}`)}>
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
