import React from 'react';
import classNames from 'classnames';
import Card from './card';

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

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
      <Card title="Title" img="Jim" description={lorem} />
      <Card title="Title" img="Chloe" description={lorem} />
      <Card title="Title" img="Nick" description={lorem} />
    </div>
  </div>
);

export default HomeContainer;
