/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import getWeb3 from './utils/getWeb3';
import SimpleStorageContract from './contracts/SimpleStorage.json';

function App() {
  const [storageValue, setStorageValue] = useState(undefined);
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState([]);

  useEffect(() => {
    const getWeb3Instance = async () => {
      try {
        // Get network provider and web3 instance.
        setWeb3(await getWeb3());
      } catch (err) {
        alert(
          'Failed to load web3, accounts, or contract. Check console for details.',
        );
        console.error(err);
      }
    };
    getWeb3Instance();
  }, []);

  useEffect(() => {
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

    if (web3 !== undefined) {
      getAccountInstance();
      getContractInstance();
    }
  }, [web3]);

  if (web3 === undefined) return <div>Loading Web3...</div>;

  return <div>Web3 loaded</div>;
}

export default App;
