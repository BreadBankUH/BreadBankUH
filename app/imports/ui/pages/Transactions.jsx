import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { Stuffs } from '../../api/stuff/Stuff';
import LoadingSpinner from '../components/LoadingSpinner';

const Transactions = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Stuffs.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const stuffItems = Stuffs.collection.find({}).fetch();
    return {
      stuffs: stuffItems,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center">
            <h2>Account History Transactions</h2>
          </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>05/02/2023</td>
                <td>Venmo Payment</td>
                <td>-$27.91</td>
              </tr>
              <tr>
                <td>04/28/2023</td>
                <td>Target VSAPUR 040716</td>
                <td>-$51.79</td>
              </tr>
              <tr>
                <td>04/17/2023</td>
                <td>AMZN Mktp VSPUR</td>
                <td>-$76.89</td>
              </tr>
              <tr>
                <td>03/21/2023</td>
                <td>University of Hawaii Tuition</td>
                <td>-$634.23</td>
              </tr>
              <tr>
                <td>02/12/2023</td>
                <td>Venmo Cashout</td>
                <td>+$12.00</td>
              </tr>
              <tr>
                <td>01/17/2023</td>
                <td>ROUND1 AM VSAPUR</td>
                <td>-$110.00</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default Transactions;
