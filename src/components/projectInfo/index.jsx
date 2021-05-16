/* eslint-disable no-alert */
import React, { useEffect, useState, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconButton, Snackbar, CircularProgress } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';

import Web3Context from '../../contexts/web3Context';
import getProjectById from '../../apis/getProjectById';
import getEth2Twd from '../../utils/getEth2Twd';
import TxnsDialog from './txnsDialog';
import sponsor from '../../apis/sponsor';

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
  const [openTxnsDialog, setOpenTxnsDialog] = useState(false);

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
      const { transactionHash } = await contract.methods
        .set(1)
        .send({ from: accounts[0] });
      await sponsor({
        money: eth,
        proposal_id: id,
        sponsor_addr: accounts[0],
        transaction_hash: transactionHash,
      });
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
        <div className={classNames('project-info-text-top-container')}>
          <IconButton onClick={() => setOpenTxnsDialog(true)}>
            <VisibilityIcon />
          </IconButton>
          <div className={classNames('project-info-text-top-name')}>
            {info.project_name}
          </div>
          <span className={info.left_time}>
            {info.left_time === 'expired' ? '已結束' : `還剩 ${info.left_time}`}
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
            href={`https://rinkeby.etherscan.io/address/${info.owner_addr}`}
          >
            {`https://rinkeby.etherscan.io/address/${info.owner_addr}`}
          </a>
        </div>
        <div className={classNames('project-info-text-item-container')}>
          <span className="label">。進度</span>
          <span>
            ${info.current_price} / ${info.target_price}
          </span>
          <span className={classNames('target')}>(目標金額)</span>
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
      {openTxnsDialog && <TxnsDialog setOpenTxnsDialog={setOpenTxnsDialog} />}
    </div>
  );
};

ProjectInfoContainer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProjectInfoContainer;
