import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6E6CBF609f93bd8132fDcf4DDc10674FA1C8e6dd'
);

export default instance;
