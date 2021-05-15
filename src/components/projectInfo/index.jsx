import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import getProjectById from '../../apis/getProjectById';

const ProjectInfoContainer = ({ id }) => {
  const [info, setInfo] = useState({});

  useEffect(async () => {
    setInfo(await getProjectById(id));
  }, []);

  const mapImages = info.img_url
    ? info.img_url.map((img) => (
        <img
          className={classNames('project-info-image')}
          alt="project"
          src={img}
        />
      ))
    : `${process.env.PUBLIC_URL}/projectInfoPage/sample.png`;

  const progress = ((info.current_price / info.target_price) * 100).toFixed(0);

  return (
    <div className={classNames('project-info-container')}>
      <div className={classNames('project-info-images-container')}>
        {mapImages}
        {/* <img
          className={classNames('project-info-image')}
          alt="project"
          src={`${process.env.PUBLIC_URL}/projectInfoPage/ncku-csie-sample0.png`}
        />
        <img
          className={classNames('project-info-image')}
          alt="project"
          src={`${process.env.PUBLIC_URL}/projectInfoPage/ncku-csie-sample1.png`}
        />
        <img
          className={classNames('project-info-image')}
          alt="project"
          src={`${process.env.PUBLIC_URL}/projectInfoPage/ncku-csie-sample2.png`}
        />
        <img
          className={classNames('project-info-image')}
          alt="project"
          src={`${process.env.PUBLIC_URL}/projectInfoPage/ncku-csie-sample3.png`}
        />
        <img
          className={classNames('project-info-image')}
          alt="project"
          src={`${process.env.PUBLIC_URL}/projectInfoPage/ncku-csie-sample4.png`}
        /> */}
      </div>
      <div className={classNames('project-info-text-container')}>
        <div className={classNames('project-info-text-progress-container')}>
          <div className={classNames('bar')} style={{ left: `${progress}%` }} />
        </div>
        <div className={classNames('project-info-text-name')}>
          {info.project_name}
          <span>剩餘21天</span>
          <span>進度 {progress}%</span>
        </div>
        <div className={classNames('project-info-text-item-container')}>
          <span className={classNames('label')}>。擁有者</span>
          <span className={classNames('value')}>{info.representative}</span>
        </div>
        <div className={classNames('project-info-text-item-container')}>
          <span className={classNames('label')}>。以太坊地址</span>
          <a
            className={classNames('value', 'link')}
            rel="noopener noreferrer"
            target="_blank"
            href={`https://etherscan.io/address/${info.owner_addr}`}
          >
            {`https://etherscan.io/address/${info.owner_addr}`}
          </a>
        </div>
        <div className={classNames('project-info-text-item-container')}>
          <span className="label">。贊助</span>
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
          <span className="label">。進度</span>
          <span>
            ${info.current_price} / ${info.target_price}
          </span>
          <span className={classNames('target')}>(目標金額)</span>
        </div>
        <div className={classNames('project-info-text-description-container')}>
          <div className={classNames('content')}>
            {info.project_description}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectInfoContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectInfoContainer;
