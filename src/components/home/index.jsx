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
      <Card
        title="1. 公開透明"
        img="Jim"
        description="所有的捐獻、使用紀錄都將紀錄在區塊鏈上，任何人都可以輕易追溯資金的流動。"
      />
      <Card
        title="2. 不可竄改"
        img="Chloe"
        description="所有已經寫進區塊鏈裡的資料，都無法再竄改，保持了資料的真實性與完整性。"
      />
      <Card
        title="3. 操作簡易"
        img="Nick"
        description="利用metamask錢包，簡單幾個步驟即可進行贊助，不需要額外的帳號或繁複的流程。"
      />
    </div>
  </div>
);

export default HomeContainer;
