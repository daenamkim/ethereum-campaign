import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xD21C1cC1887e34b1e857930969036e13Fb314A86'
);

export default instance;
