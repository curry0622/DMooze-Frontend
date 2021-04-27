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
      <div className={classNames('project-info-text-name')}>
        成大資訊營-終局資戰
      </div>
      <div className={classNames('project-info-text-item-container')}>
        <span className="label">擁有者</span>
        <span className="name">張凱傑 KJay</span>
      </div>
      <div className={classNames('project-info-text-item-container')}>
        <span className="label">以太坊地址</span>
        <a className="link" href={`https://etherscan.io/address/${addr}`}>
          {`https://etherscan.io/address/${addr}`}
        </a>
      </div>
      <div className={classNames('project-info-text-item-container')}>
        <span className="label">贊助</span>
        <div className={classNames('project-info-text-input-container')}>
          <span className="eth">ETH</span>
          <input type="number" />
          <span className="currency">NT$0</span>
          <button type="button">
            <img
              alt="metamask"
              src={`${process.env.PUBLIC_URL}/projectInfoPage/metamask.svg`}
            />
            發送
          </button>
        </div>
      </div>
    </div>
  </div>
);

ProjectInfoContainer.propTypes = {
  addr: PropTypes.string.isRequired,
};

export default ProjectInfoContainer;
