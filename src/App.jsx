/* eslint-disable no-alert */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Web3Context from './contexts/web3Context';
import getWeb3 from './utils/getWeb3';
import SimpleStorageContract from './contracts/SimpleStorage.json';

import HomePage from './pages/home';
import ProjectsPage from './pages/projects';
import MoozePage from './pages/mooze';
import ProjectInfoPage from './pages/projectInfo';

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
  const getAccountsInstance = async () => {
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

  const web3ContextValue = {
    web3,
    getWeb3Instance,
    accounts,
    getAccountsInstance,
    contract,
    getContractInstance,
  };

  return (
    <Web3Context.Provider value={web3ContextValue}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route path="/mooze" component={MoozePage} />
        <Route path="/projects/:addr" component={ProjectInfoPage} />
      </Switch>
    </Web3Context.Provider>
  );
}

export default App;
