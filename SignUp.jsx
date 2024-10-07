// SignUp.jsx
import React from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

const SignUp = () => {
  return (
    <div style={{ margin: '20px' }}>
      <Header as="h2" textAlign="center">Sign Up for Our Daily Insider</Header>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Enter your username' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Enter your email' />
        </Form.Field>
        <Button type='submit' primary fluid>Sign Up</Button>
      </Form>
    </div>
  );
};

export default SignUp;
