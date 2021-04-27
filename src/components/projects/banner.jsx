import React from 'react';
import classNames from 'classnames';

const Banner = () => (
  <div className={classNames('projects-banner-container')}>
    <div className={classNames('projects-banner-left-container')}>
      <div className={classNames('projects-banner-title')}>提案們</div>
      <div>Students&apos; Projects</div>
      <div className={classNames('projects-banner-description')}>
        地方的大學生們
        <br />
        需要你的錢錢
      </div>
    </div>
    <div className={classNames('projects-banner-right-container')}>
      {/* right */}
      <div className={classNames('project-banner-right-img-container')}>
        <img
          className={classNames('projects-banner-right-img')}
          alt="person"
          src={`${process.env.PUBLIC_URL}/projectsPage/left.png`}
        />
        <img
          className={classNames('projects-banner-right-img')}
          alt="person"
          src={`${process.env.PUBLIC_URL}/projectsPage/mid.png`}
        />
        <img
          className={classNames('projects-banner-right-img')}
          alt="person"
          src={`${process.env.PUBLIC_URL}/projectsPage/right.png`}
        />
      </div>
    </div>
  </div>
);

export default Banner;
