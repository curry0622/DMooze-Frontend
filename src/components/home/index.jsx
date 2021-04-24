import React from 'react';
import classNames from 'classnames';
import Card from './card';

const HomeContainer = () => (
  <div className={classNames('home-container')}>
    <div className={classNames('home-left-container')}>
      <div className={classNames('home-title')}>DMooze</div>
      <div>Decentralized Moozing Platform</div>
      <div className={classNames('home-chinese-description')}>
        <div>去中心化</div>
        <div>學生活動募款平台</div>
      </div>
    </div>
    <div className={classNames('home-right-container')}>
      <Card img="Jim" />
      <Card img="Chloe" />
      <Card img="Nick" />
    </div>
  </div>
);

export default HomeContainer;
