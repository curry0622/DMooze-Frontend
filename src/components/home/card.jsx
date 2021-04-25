import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ title, img, description }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={classNames('home-card-container')}
      onMouseEnter={() => {
        setTimeout(() => setHover(true), 250);
      }}
      onMouseLeave={() => setHover(false)}
    >
      <div className={classNames('home-card-title')}>{title}</div>
      <img
        className={classNames('home-card-img')}
        alt="person"
        src={`${process.env.PUBLIC_URL}/homePage/${img}${
          hover ? '-hover' : ''
        }.png`}
      />
      <div className={classNames('home-card-description')}>{description}</div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
