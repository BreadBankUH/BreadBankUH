import React from 'react';
import Card from 'react-bootstrap/Card';
import { BiTransfer } from 'react-icons/bi';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const TransferFundsCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <BiTransfer size={70} />
      <Card.Title>Transfer Funds</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Send funds to another person</Card.Subtitle>
      <Card.Link href="#">Card Link</Card.Link>
    </Card.Body>
  </Card>
);

export default TransferFundsCard;
