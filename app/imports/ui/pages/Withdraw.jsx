import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TransactionCard from '../components/TransactionCard';
import DepositCard from '../components/DepositCard';
import WithdrawCard from '../components/WithdrawCard';
import TransferFundsCard from '../components/TransferFundsCard';
import PayBillsCard from '../components/PayBillsCard';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
const Homepage = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={12} sm={8} className="text-center">
        <h2>
          <p>Welcome Doe, John</p>
        </h2>
        <h2>
          <p>Available Balance: $4,342</p>
        </h2>
        <p>Checking Account #1234567890</p>
        <Row>
          <Col xs={12} className="mb-3">
            <div className="d-flex justify-content-center"> {/* Center the card */}
              <TransactionCard />
            </div>
          </Col>
          <Col xs={6} className="mb-3">
            <div className="d-flex justify-content-center"> {/* Center the card */}
              <DepositCard />
            </div>
          </Col>
          <Col xs={6} className="mb-3">
            <div className="d-flex justify-content-center"> {/* Center the card */}
              <WithdrawCard />
            </div>
          </Col>
          <Col xs={6} className="mb-3">
            <div className="d-flex justify-content-center"> {/* Center the card */}
              <TransferFundsCard />
            </div>
          </Col>
          <Col xs={6} className="mb-3">
            <div className="d-flex justify-content-center"> {/* Center the card */}
              <PayBillsCard />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Homepage;
