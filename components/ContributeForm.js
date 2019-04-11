import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

class ContributeForm extends Component {
  render() {
    return (
      <Form error={false}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input label="ether" labelPosition="right" />
        </Form.Field>
        {/* <Message error header="Oops!" content={'errorMessage'} /> */}
        <Button primary>Contribute!</Button>
      </Form>
    );
  }
}

export default ContributeForm;
