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

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .contribute()
        .send({ from: accounts[0], value: web3.utils.toWei(value, 'ether') });

      // Refresh
      Router.replaceRoute(`/campaigns/${address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: '' });
  };

  render() {
    const { value, loading, errorMessage } = this.state;

    return (
      <Form onSubmit={this.onSubmit} error={!!errorMessage}>
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
        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
