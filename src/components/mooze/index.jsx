import React from 'react';
import classNames from 'classnames';
import MoozeForm from './form';

const MoozeContainer = () => (
  <div className={classNames('mooze-container')}>
    <div className={classNames('mooze-left-container')}>
      <div className={classNames('mooze-left-text-container')}>
        <div className={classNames('mooze-left-text-title')}>開始提案</div>
        <div className={classNames('mooze-left-text-subtitle-en')}>
          Start Moozing
        </div>
        <div className={classNames('mooze-left-text-subtitle-zh')}>
          將你的點子上傳 讓更多人看見你吧!
        </div>
      </div>
      <img
        className={classNames('mooze-banner-img')}
        alt="DMooze"
        src={`${process.env.PUBLIC_URL}/moozePage/bg.png`}
      />
    </div>
    <div className={classNames('mooze-right-container')}>
      <MoozeForm />
    </div>
  </div>
);

export default MoozeContainer;
