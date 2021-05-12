import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ addr, name, img, price, target, day }) => {
  const progress = ((price / target) * 100).toFixed(0);

  return (
    <Link
      className={classNames('projects-card-container')}
      to={`/projects/${addr}`}
    >
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
    </Link>
  );
};

Card.propTypes = {
  addr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
};

export default Card;
