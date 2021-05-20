import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Card = ({ id, name, img, price, target, day, exchangeRate }) => {
  const progress = ((price / target) * 100).toFixed(0);

  return (
    <Link
      className={classNames('projects-card-container')}
      to={`/projects/${id}`}
    >
      <img
        className={classNames('projects-card-img')}
        alt="project"
        src={img}
      />
      <div className={classNames('projects-card-content-container')}>
        <div className={classNames('projects-card-content-name')}>{name}</div>
        <div
          className={classNames('projects-card-content-progress')}
          style={{ backgroundColor: `${progress < 100 ? '#555' : '#ff8585'}` }}
        >
          <div
            className={classNames('projects-card-content-progress-value')}
            style={{ left: `${progress}%` }}
          />
        </div>
        <div className={classNames('projects-card-content-info-container')}>
          <div className={classNames('projects-card-content-info-money')}>
            NT$ {(price * exchangeRate).toFixed(0)}
            <span>{progress}%</span>
          </div>
          <div
            className={classNames(
              `projects-card-content-info-day${
                day === 'expired' ? '--expired' : ''
              }`,
            )}
          >
            {day === 'expired' ? '已結束' : `還剩 ${day}`}
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
  day: PropTypes.string.isRequired,
  exchangeRate: PropTypes.number.isRequired,
};

export default Card;
