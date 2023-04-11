import React from 'react';
import Card from 'react-bootstrap/Card';
import { CiMoneyBill } from 'react-icons/ci';
import { NavLink } from 'react-router-dom';

const PayBillsCard = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <CiMoneyBill size={70} />
      <Card.Title>Pay Bills</Card.Title>
      <Card.Subtitle as={NavLink} exact to="/paybills" variant="primary" size="large">Pay your bills online</Card.Subtitle>
    </Card.Body>
  </Card>
);

export default PayBillsCard;
