import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="py-3">
    <Row className="align-middle text-center">
      <Col className="text-center">
        <Image src="/images/bread-bank-uh-logo.png" width="150px" />
        <h1>Welcome to Bread Bank UH</h1>
        <p>Online access to your bank account 24/7</p>
        <h6>Deposit Checks, Withdraw Money, Transfer Money and more with Online Banking!</h6>
        <button type="button" className="btn btn-primary btn-lg">Login</button>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h6>Don't have an account? Sign up today!</h6>
        <button type="button" className="btn btn-success btn-lg">Sign Up</button>
      </Col>
    </Row>
  </Container>
);

export default Landing;
