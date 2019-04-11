import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const { address } = this.props;
    const { value } = this.state;
    const campaign = Campaign(address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .contribute()
        .send({ from: accounts[0], value: web3.utils.toWei(value, 'ether') });

      // Refresh
      Router.replaceRoute(`/campaigns/${address}`);
    } catch (err) {}
  };

  render() {
    const { value } = this.state;

    return (
      <Form onSubmit={this.onSubmit} error={false}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={value}
            onChange={event =>
              this.setState({
                value: event.target.value
              })
            }
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        {/* <Message error header="Oops!" content={'errorMessage'} /> */}
        <Button primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
