import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, ROuter } from '../../../routes';
import Layout from '../../../components/Layout';

class RequestNew extends Component {
  state = {
    value: '',
    description: '',
    recipient: '',
    errorMessage: '',
    loading: false
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    const { address } = this.props;
    const { description, value, recipient } = this.state;
    const campaign = Campaign(address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, 'ether'), recipient)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMessage: err });
    }

    this.setState({ loading: false });
  };

  render() {
    const { value, description, recipient, loading, errorMessage } = this.state;

    return (
      <Layout>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={description}
              onChange={event => {
                this.setState({ description: event.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              label="ether"
              labelPosition="right"
              value={value}
              onChange={event => {
                this.setState({ value: event.target.value });
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              label="0x..."
              labelPosition="right"
              recipient={recipient}
              onChange={event => {
                this.setState({ recipient: event.target.value });
              }}
            />
          </Form.Field>
          <Button primary loading={loading}>
            Create
          </Button>
          <Message error header="Oops!" content={errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default RequestNew;
