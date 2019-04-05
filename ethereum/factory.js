import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7B1C43b2C3F735Bbb230836aCe954f7551532D5a'
);

export default instance;
