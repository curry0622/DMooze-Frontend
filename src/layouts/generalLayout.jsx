import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/nav';

const GeneralLayout = ({ children }) => (
  <main>
    <Nav />
    {children}
  </main>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralLayout;
