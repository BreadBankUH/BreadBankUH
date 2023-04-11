import React from 'react';
import Card from 'react-bootstrap/Card';
import { RiLuggageDepositLine } from 'react-icons/ri';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const DepositCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <RiLuggageDepositLine size={70} />
      <Card.Title>Deposit</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Deposit checks into your account</Card.Subtitle>
      <Card.Link href="#">Card Link</Card.Link>
    </Card.Body>
  </Card>
);

export default DepositCard;
