import React, { useState } from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Col, Container, Image, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  // Handle Signin submission using Meteor's account mechanism.
  const submit = (doc) => {
    // console.log('submit', doc, redirect);
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
    // console.log('submit2', email, password, error, redirect);
  };

  // Render the signin form.
  // console.log('render', error, redirect);
  // if correct authentication, redirect to page instead of login screen
  if (redirect) {
    return (<Navigate to="/" />);
  }
  // Otherwise return the Login form.
  return (
    <Container id="signin-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <Image src="/images/bread-bank-uh-logo.png" width="150px" />
            <h1>Welcome to Bread Bank UH</h1>
            <p>Online access to your bank account 24/7</p>
            <h6>Deposit Checks, Withdraw Money, Transfer Money and more with Online Banking!</h6>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <TextField id="signin-form-email" name="email" placeholder="E-mail address" />
            <TextField id="signin-form-password" name="password" placeholder="Password" type="password" />
            <ErrorsField />
            <SubmitField id="signin-form-submit" />
          </AutoForm>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <Alert.Link as={NavLink} exact to="/signup" variant="primary" size="large">Create an Account</Alert.Link>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Login was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
