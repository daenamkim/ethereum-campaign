import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestCount().call();

    // contract cannot return array
    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((_, index) => {
          return campaign.methods.requests(index).call();
        })
    );

    console.log(requests);

    return { address };
  }

  render() {
    const { address } = this.props;

    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${address}/requests/new`}>
          {/* <a> */}
          <Button primary>Add Request</Button>
          {/* </a> */}
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
