import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../components/nav';
import Footer from '../components/footer';

const GeneralLayout = ({ children }) => (
  <main>
    <Nav />
    {children}
    {/* <Footer /> */}
  </main>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralLayout;
