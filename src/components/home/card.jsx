import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ img }) => (
  <div className={classNames('home-card-container')}>
    <div className={classNames('home-card-title')}>Title</div>
    <img
      className={classNames('home-card-img')}
      alt="person"
      src={`${process.env.PUBLIC_URL}/homePage/${img}.png`}
    />
    <div className={classNames('home-card-description')}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </div>
  </div>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Card;
