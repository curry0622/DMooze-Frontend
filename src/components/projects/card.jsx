import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Card = ({ name, img, price, target, day }) => {
  const progress = ((price / target) * 100).toFixed(0);

  return (
    <div className={classNames('projects-card-container')}>
      <img
        className={classNames('projects-card-img')}
        alt="project"
        src={`${process.env.PUBLIC_URL}/projectsPage/${img}.png`}
      />
      <div className={classNames('projects-card-content-container')}>
        <div className={classNames('projects-card-content-name')}>{name}</div>
        <div className={classNames('projects-card-content-progress')}>
          <div
            className={classNames('projects-card-content-progress-value')}
            style={{ left: `${progress}%` }}
          />
        </div>
        <div className={classNames('projects-card-content-info-container')}>
          <div className={classNames('projects-card-content-info-money')}>
            ${price}
            <span>{progress}%</span>
          </div>
          <div className={classNames('projects-card-content-info-day')}>
            還剩{day}天
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default Card;
