import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col } from 'react-bootstrap';

function Cards() {
  return (
    <Row>
      <Col>
        <Card bg="primary" text="white">
          <Card.Body>
            <Card.Title>Left Card</Card.Title>
            <Card.Text>
              Filler text filler text.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="secondary" text="white">
          <Card.Body>
            <Card.Title>Middle Card</Card.Title>
            <Card.Text>
              Filler text filler text.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card bg="success" text="white">
          <Card.Body>
            <Card.Title>Far Right Card</Card.Title>
            <Card.Text>
              Filler text filler text.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Cards;