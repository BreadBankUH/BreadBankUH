import React from 'react';
import Card from 'react-bootstrap/Card';
import { AiOutlineHistory } from 'react-icons/ai';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const AccountHistoryCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <AiOutlineHistory size={70}/>
      <Card.Title>Account History</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">View your account transactions</Card.Subtitle>
      <Card.Link href="#">Card Link</Card.Link>
    </Card.Body>
  </Card>
);

export default AccountHistoryCard;
