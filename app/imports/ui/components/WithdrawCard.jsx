import React from 'react';
import Card from 'react-bootstrap/Card';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const WithdrawCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <BiMoneyWithdraw size={70} />
      <Card.Title>Withdraw</Card.Title>
      <Card.Subtitle as={NavLink} exact to="/withdraw" variant="primary" size="large">Withdraw from your account</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default WithdrawCard;
