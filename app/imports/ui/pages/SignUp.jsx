import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField, BoolField } from 'uniforms-bootstrap5';

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const SignUp = ({ location }) => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    email: String,
    password: {
      type: String,
      min: 8,
      // eslint-disable-next-line consistent-return
      custom() {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
        // eslint-disable-next-line react/no-this-in-sfc
        if (!passwordRegex.test(this.value)) {
          return 'Password must be at least 8 characters long, contain at least one number, one special character, and one capital letter.';
        }
      },
    },
    accountNumber: {
      type: String,
      min: 10,
      max: 10,
      regEx: /^\d+$/,
    },
    socialSecurityNumber: {
      type: String,
      regEx: /^\d{3}-?\d{2}-?\d{4}$/,
    },
    birthDate: {
      type: Date,
      // eslint-disable-next-line consistent-return
      custom() {
        const currentDate = new Date();
        // eslint-disable-next-line react/no-this-in-sfc
        const inputDate = new Date(this.value);
        if (inputDate > currentDate) {
          return 'Birthdate must be before the current date.';
        }
      },
    },
    termsAgreement: Boolean,
    privacyAgreement: Boolean,
  });

  const bridge = new SimpleSchema2Bridge(schema);

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const { email, password, termsAgreement, privacyAgreement } = doc;
    if (!termsAgreement || !privacyAgreement) {
      setError('Please agree to the Terms & Conditions and Privacy Policy.');
      return;
    }
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setError('');
        setRedirectToRef(true);
      }
    });
  };

  /* Display the signup form. Redirect to add page after successful registration and login. */
  const { from } = location?.state || { from: { pathname: '/add' } };
  // if correct authentication, redirect to from: page instead of signup screen
  if (redirectToReferer) {
    return <Navigate to={from} />;
  }

  return (
    <Container id="signup-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Register your account</h2>
          </Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card>
              <Card.Body>
                <TextField name="email" placeholder="E-mail address" />
                <TextField name="password" placeholder="Password" type="password" />
                <TextField name="accountNumber" placeholder="10 Digit Account Number" />
                <TextField name="socialSecurityNumber" placeholder="SSN 999-99-9999" />
                <TextField name="birthDate" placeholder="Birthdate" type="date" />
                <BoolField name="termsAgreement" label="I agree to the terms and conditions" />
                <Link to="/termsandconditions">View Terms & Conditions</Link>
                <BoolField name="privacyAgreement" label="I agree to the privacy policy" />
                <Link to="/privacypolicy">View Privacy Policy</Link>
                <ErrorsField />
                <SubmitField />
              </Card.Body>
            </Card>
          </AutoForm>
          <Alert variant="light">
            Already have an account? Login
            {' '}
            <Link to="/signin">here</Link>
          </Alert>
          {error === '' ? (
            ''
          ) : (
            <Alert variant="danger">
              <Alert.Heading>Registration was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

/* Ensure that the React Router location object is available in case we need to redirect. */
SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  location: { state: '' },
};

export default SignUp;
