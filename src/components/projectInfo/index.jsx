/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Snackbar, CircularProgress } from '@material-ui/core';

import Web3Context from '../../contexts/web3Context';
import getProjectById from '../../apis/getProjectById';
import postTxnRecord from '../../apis/postTxnRecord';
import getEth2Twd from '../../utils/getEth2Twd';

const ProjectInfoContainer = ({ id }) => {
  const {
    web3,
    getWeb3Instance,
    accounts,
    getAccountsInstance,
    contract,
    getContractInstance,
  } = useContext(Web3Context);
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [eth, setEth] = useState(0);

  const mapImages = info.img_url
    ? info.img_url.map((img) => (
        <img
          key={img}
          className={classNames('project-info-image')}
          alt="project"
          src={img}
        />
      ))
    : `${process.env.PUBLIC_URL}/projectInfoPage/sample.png`;

  const progress = ((info.current_price / info.target_price) * 100).toFixed(0);

  const onClickSponsor = async () => {
    if (!web3) {
      getWeb3Instance();
      return;
    }
    setIsLoading(true);
    try {
      await contract.methods.set(eth).send({ from: accounts[0] });
      await postTxnRecord();
    } catch (e) {
      alert(e.message);
    }
    setIsLoading(false);
  };

  useEffect(async () => {
    setInfo(await getProjectById(id));
    setExchangeRate(await getEth2Twd());
  }, []);

  useEffect(async () => {
    if (web3 !== undefined) {
      await getAccountsInstance();
      await getContractInstance();
    }
  }, [web3]);

  return (
    <div className={classNames('project-info-container')}>
      <div className={classNames('project-info-images-container')}>
        {mapImages}
      </div>
      <div className={classNames('project-info-text-container')}>
        <div className={classNames('project-info-text-progress-container')}>
          <div className={classNames('bar')} style={{ left: `${progress}%` }} />
        </div>
        <div className={classNames('project-info-text-name')}>
          {info.project_name}
          <span className={info.left_time}>
            {info.left_time === 'expired' ? '已過期' : `還剩 ${info.left_time}`}
          </span>
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
        {info.left_time !== 'expired' && (
          <div className={classNames('project-info-text-item-container')}>
            <span className="label">。贊助</span>
            <div
              className={classNames(
                'project-info-text-input-container',
                'value',
              )}
            >
              <span className={classNames('eth')}>ETH</span>
              <input
                type="number"
                step="0.0001"
                value={eth}
                onChange={(e) => setEth(e.target.value)}
              />
              <span className={classNames('currency')}>
                NT$ {(exchangeRate * eth).toFixed(0)}
              </span>
              <button type="button" onClick={onClickSponsor}>
                <img
                  alt="metamask"
                  src={`${process.env.PUBLIC_URL}/projectInfoPage/metamask.svg`}
                />
                發送
              </button>
            </div>
          </div>
        )}
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
      <Snackbar
        open={isLoading}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        message="交易上鏈中..."
        action={<CircularProgress color="inherit" size="18px" />}
      />
    </div>
  );
};

ProjectInfoContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectInfoContainer;
