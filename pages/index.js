import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
  // static is to do something before rendering
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    // TODO: MetaMask is not working
    // const items = this.props.campaigns.map(address => ({
    //   header: address,
    //   description: <a>View Campaign</a>,
    //   fluid: true
    // }));
    const test = [
      '0x672b39F0D2609a6FeC23358f4b8D8c92104BAF51',
      '0x672b39F0D2609a6FeC23358f4b8D8c92104BAF52',
      '0x672b39F0D2609a6FeC23358f4b8D8c92104BAF53'
    ];
    const items = test.map(address => ({
      header: address,
      description: <Link route={`/campaigns/${address}`}>View Campaign</Link>,
      fluid: true
    }));

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <Button
              floated="right"
              content="Create Campaign"
              icon="add circle"
              primary
            />
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
