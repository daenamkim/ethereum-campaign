import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    // TODO: MetaMask is not working
    // const campaign = Campaign(address);
    // const summary = await campaign.methods.getSummary().call();
    const summary = {
      '0': '100',
      '1': '0',
      '2': '0',
      '3': '0',
      '4': '0x672b39F0D2609a6FeC23358f4b8D8c92104BAF56'
    };
    console.log(summary);
    // return of the contract doesn't have keys
    return {
      minimumContribution: summary['0'],
      balance: summary['1'],
      requestCount: summary['2'],
      approversCount: summary['3'],
      manager: summary['4']
    };
  }

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestCount,
      approversCount,
      manager
    } = this.props;

    console.log(this.props);

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description:
          'The manager created this campaign and can create requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Minimum Contribution (wei)',
        description:
          'You must contribute at least this much wei to become an approver',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: requestCount,
        meta: 'Number of Requests',
        description:
          'A request tries to withdraw money from the contract. Requests must be approved by approvers',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description:
          'Number of people who have already donated to this campaign',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        meta: 'Campaign Balance (ether)',
        description:
          'The balance is how much money this campaign has left to spend'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
        {this.renderCards()}
      </Layout>
    );
  }
}

export default CampaignShow;
