import React from 'react';
import classNames from 'classnames';
import MoozeForm from './form';

const MoozeContainer = () => (
  <div className={classNames('mooze-container')}>
    <div className={classNames('mooze-left-container')}>
      <img
        className={classNames('mooze-banner-img')}
        alt="DMooze"
        src={`${process.env.PUBLIC_URL}/moozePage/bg.png`}
      />
      <img
        className={classNames('mooze-banner-img')}
        alt="Girl"
        src={`${process.env.PUBLIC_URL}/moozePage/girl.png`}
      />
    </div>
    <div className={classNames('mooze-right-container')}>
      <MoozeForm />
    </div>
  </div>
);

export default MoozeContainer;
