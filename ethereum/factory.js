import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x36334DDe59be7453B82ADf8807a00713a0678D8F'
);

export default instance;
