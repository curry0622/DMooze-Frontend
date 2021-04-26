import React from 'react';
import classNames from 'classnames';

const Card = () => (
  <div className={classNames('projects-card-container')}>
    {/* <div className={classNames('projects-card-header')}>張凱傑</div> */}
    <img
      className={classNames('projects-card-img')}
      alt="project"
      src={`${process.env.PUBLIC_URL}/projectsPage/sample.jpg`}
    />
    <div className={classNames('projects-card-content-container')}>
      <div className={classNames('projects-card-content-name')}>
        區塊鏈募資平台
      </div>
      <div className={classNames('projects-card-content-progress')}>
        <div className={classNames('projects-card-content-progress-value')} />
      </div>
      <div className={classNames('projects-card-content-info-container')}>
        <div className={classNames('projects-card-content-info-money')}>
          $2400<span>12%</span>
        </div>
        <div className={classNames('projects-card-content-info-day')}>
          還剩6天
        </div>
      </div>
    </div>
  </div>
);

export default Card;
