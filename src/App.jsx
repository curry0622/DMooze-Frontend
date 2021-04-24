/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Web3Context from './contexts/web3Context';
import getWeb3 from './utils/getWeb3';
import SimpleStorageContract from './contracts/SimpleStorage.json';

function App() {
  // const [storageValue, setStorageValue] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState([]);

  // Get network provider and web3 instance.
  const getWeb3Instance = async () => {
    try {
      setWeb3(await getWeb3());
    } catch (err) {
      alert(
        'Failed to load web3, accounts, or contract. Check console for details.',
      );
      console.error(err);
    }
  };

  // Use web3 to get the user's accounts.
  const getAccountInstance = async () => {
    try {
      setAccounts(await web3.eth.getAccounts());
    } catch (error) {
      alert('Failed to load accounts. Check console for details.');
      console.error(error);
    }
  };

  // Get the contract instance.
  const getContractInstance = async () => {
    try {
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      setContract(instance);
    } catch (error) {
      alert('Failed to load contract. Check console for details.');
      console.error(error);
    }
  };

  useEffect(() => {
    getWeb3Instance();
  }, []);

  useEffect(() => {
    if (web3 !== undefined) {
      getAccountInstance();
      getContractInstance();
    }
  }, [web3]);

  const web3ContextValue = {
    web3,
    getWeb3Instance,
    accounts,
    getAccountInstance,
    contract,
    getContractInstance,
  };

  if (web3 === undefined) return <div>Loading Web3...</div>;

  return (
    <Web3Context.Provider value={web3ContextValue}>
      <div>Web3 loaded</div>
    </Web3Context.Provider>
  );
}

export default App;
