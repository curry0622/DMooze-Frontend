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
    </div>
  </div>
);

export default Banner;
