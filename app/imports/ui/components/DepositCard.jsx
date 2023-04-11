import React from 'react';
import Card from 'react-bootstrap/Card';
import { RiLuggageDepositLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const DepositCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <RiLuggageDepositLine size={70} />
      <Card.Title>Deposit</Card.Title>
      <Card.Subtitle as={NavLink} exact to="/deposit" variant="primary" size="large">Deposit Funds</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default DepositCard;
