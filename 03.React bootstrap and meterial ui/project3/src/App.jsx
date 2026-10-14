import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Card>j
            <Card.Body>
              <Card.Title>Python Course</Card.Title>
              <Card.Text>Duration: 3 Months</Card.Text>
            </Card.Body>
          </Card>
        </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Python Course</Card.Title>
              <Card.Text>Duration: 3 Months</Card.Text>
            </Card.Body>
          </Card>
        </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Python Course</Card.Title>
              <Card.Text>Duration: 3 Months</Card.Text>
            </Card.Body>
          </Card>
        </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
          <Card>
            <Card.Body>
              <Card.Title>Python Course</Card.Title>
              <Card.Text>Duration: 3 Months</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;