import Web3 from 'web3';

const INFURA_API =
  'https://rinkeby.infura.io/v3/e8b3e20085c348e3989f9cc83c4708ac';
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask.
  // TODO: make user select each network
  const provider = new Web3.providers.HttpProvider(INFURA_API);
  web3 = new Web3(provider);
}

export default web3;
