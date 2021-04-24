import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import Web3Context from '../../contexts/web3Context';

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
      {web3 !== undefined ? (
        <div>connected</div>
      ) : (
        <button
          className={classNames('mooze-connect')}
          type="button"
          onClick={onClickConnect}
        >
          Connect to metamask
        </button>
      )}
    </div>
  );
};

export default MoozeContainer;
