import React from 'react';
import Card from 'react-bootstrap/Card';
import { BiMoneyWithdraw } from 'react-icons/bi';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const WithdrawCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <BiMoneyWithdraw size={70} />
      <Card.Title>Withdraw</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Withdraw funds from account</Card.Subtitle>
      <Card.Link href="#">Card Link</Card.Link>
    </Card.Body>
  </Card>
);

export default WithdrawCard;
