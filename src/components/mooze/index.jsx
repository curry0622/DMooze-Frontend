import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import Web3Context from '../../contexts/web3Context';
import MoozeForm from './form';

const MoozeContainer = () => {
  // get web3 context
  const {
    web3,
    getWeb3Instance,
    accounts,
    getAccountsInstance,
    contract,
    getContractInstance,
  } = useContext(Web3Context);

  const onClickConnect = () => {
    getWeb3Instance();
  };

  // useEffect(() => {
  //   getWeb3Instance();
  // }, []);

  useEffect(() => {
    if (web3 !== undefined) {
      getAccountsInstance();
      getContractInstance();
    }
  }, [web3]);

  return (
    <div className={classNames('mooze-container')}>
      <div className={classNames('mooze-left-container')}>
        {/* <img
          className={classNames('mooze-banner-img')}
          alt="DMooze"
          src={`${process.env.PUBLIC_URL}/moozePage/moose.svg`}
        /> */}
      </div>
      <div className={classNames('mooze-right-container')}>
        {web3 !== undefined ? (
          <MoozeForm />
        ) : (
          <button
            className={classNames('mooze-metamask-btn')}
            type="button"
            onClick={onClickConnect}
          >
            <img
              className={classNames('mooze-metamask-img')}
              alt="metamask"
              src={`${process.env.PUBLIC_URL}/moozePage/metamask.svg`}
            />
            CONNECT TO METAMASK
          </button>
        )}
      </div>
    </div>
  );
};

export default MoozeContainer;
