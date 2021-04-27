/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ProjectInfoContainer = ({ addr }) => (
  <div className={classNames('project-info-container')}>
    <div className={classNames('project-info-images-container')}>
      <img
        className={classNames('project-info-image')}
        alt="project"
        src={`${process.env.PUBLIC_URL}/projectsPage/sample2.png`}
      />
      <img
        className={classNames('project-info-image')}
        alt="project"
        src={`${process.env.PUBLIC_URL}/projectsPage/sample1.png`}
      />
      <img
        className={classNames('project-info-image')}
        alt="project"
        src={`${process.env.PUBLIC_URL}/projectsPage/sample3.png`}
      />
    </div>
    <div className={classNames('project-info-text-container')}>
      <div className={classNames('project-info-text-progress-container')}>
        <div className={classNames('bar')} style={{ left: `${39}%` }} />
      </div>
      <div className={classNames('project-info-text-name')}>
        成大資訊營-終局資戰
        <span>剩餘21天</span>
        <span>進度 39%</span>
      </div>
      <div className={classNames('project-info-text-item-container')}>
        <span className={classNames('label')}>擁有者</span>
        <span className={classNames('value')}>KJay</span>
      </div>
      <div className={classNames('project-info-text-item-container')}>
        <span className={classNames('label')}>以太坊地址</span>
        <a
          className={classNames('value', 'link')}
          href={`https://etherscan.io/address/${addr}`}
        >
          {`https://etherscan.io/address/${addr}`}
        </a>
      </div>
      <div className={classNames('project-info-text-item-container')}>
        <span className="label">贊助</span>
        <div
          className={classNames('project-info-text-input-container', 'value')}
        >
          <span className={classNames('eth')}>ETH</span>
          <input type="number" />
          <span className={classNames('currency')}>NT$0</span>
          <button type="button">
            <img
              alt="metamask"
              src={`${process.env.PUBLIC_URL}/projectInfoPage/metamask.svg`}
            />
            發送
          </button>
        </div>
      </div>
      <div className={classNames('project-info-text-item-container')}>
        <span className="label">進度</span>
        <span>$25020 / $234200</span>
        <span className={classNames('target')}>(目標金額)</span>
      </div>
      {/* <div className={classNames('project-info-text-progress-container')}>
        <div
          className={classNames('bar')}
          style={{ left: `${39}%` }}
        />
      </div> */}
      <div className={classNames('project-info-text-description-container')}>
        <div className={classNames('label')}>說明</div>
        <div className={classNames('content')}>
          記痛同現其觀一日……演充不思強；在致空樣；內角算能為來紀愛病我動在新、打去後最冷反和飯的後高人單一器英再白。主反得是此，類魚開府，我那實形的你品中用。新治質十只的房，設龍出回其名保加刻家車。味傳腦之合標心何利水十的人孩物戲論友的學勢特、的洋質神考青經平另長食水印話臺王每個傳；要呢四片，位止所此看生生童向轉當府怕更電方先更要。設龍出回其名保加刻家車。味傳腦之合標心何利水十的人孩物戲論友的學勢特、的洋質神考青經平另長食水印話臺王每個傳；要呢四片，位止所此看生生童向轉當府怕更電方先更要。位止所此看生生童向轉當府怕更電方先更要。
        </div>
      </div>
    </div>
  </div>
);

ProjectInfoContainer.propTypes = {
  addr: PropTypes.string.isRequired,
};

export default ProjectInfoContainer;
