import React from 'react';
import Card from 'react-bootstrap/Card';
import { AiOutlineHistory } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const TransactionCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <AiOutlineHistory size={70} />
      <Card.Title>View Transactions</Card.Title>
      <Card.Subtitle as={NavLink} exact to="/accounthistory" variant="primary" size="large">View your account transactions</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default TransactionCard;
