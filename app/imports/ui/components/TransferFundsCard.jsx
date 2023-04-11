import React from 'react';
import Card from 'react-bootstrap/Card';
import { BiTransfer } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const TransferFundsCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <BiTransfer size={70} />
      <Card.Title>Transfer Funds</Card.Title>
      <Card.Subtitle as={NavLink} exact to="/transferfunds" variant="primary" size="large">Transfer funds to another person</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default TransferFundsCard;
