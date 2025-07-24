import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Cardimage from './logo.svg';
import Deva from './Assets/Images/jaganatham.jpg'
import Form from 'react-bootstrap/Form';
import Krishna from './Assets/Images/Iskon.jpg';
import Ramsapeer from './Assets/Images/Ramsa.jpeg';
import Shyam from './Assets/Images/Shyam.jpg';
function Demo() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="Deva" src={Deva} />
                            <Card.Body>
                                <Card.Title>jaganatham Bhagwan</Card.Title>
                                <Card.Text>
                                   “In moments of doubt, remember that Lord Jagannath is always with you.” “May the divine blessings of Lord Jagannath bring you peace and prosperity.” “Let Lord Jagannath's light illuminate your path and lead you to success.”
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="Cardimage" src={Shyam} />
                            <Card.Body>
                                <Card.Title>Katu-Shyam Baba</Card.Title>
                                <Card.Text>
                                  Teen ban Dhari. Hare ka sahara Baba shyam humara
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Krishna} />
                            <Card.Body>
                                <Card.Title>Radha-Krishna</Card.Title>
                                <Card.Text>
                                   "True love doesn't ask for possession; it celebrates freedom—just like Radha Krishna." "In the whispers of Radha and Krishna, eternity blossoms." "Their love is divine music, heard by hearts attuned to devotion."
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="Cardimage" src={Ramsapeer} />
                            <Card.Body>
                                <Card.Title>Momos</Card.Title>
                                <Card.Text>
                                    Momos is my most favourite dish in the
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>


            {/* Forms */}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


            {/* Dashboard */}
            import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './DashboardHome.css';
import Img from '../Assets/Images/logo1.jpg';

function Dashhome() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        &nbsp;<img src={Img} height={80} width={200}/>
        <h4 className="text-white px-3 py-4"></h4>
        <ul>
          <li>🏠 Dashboard</li>
          <li>📦 My Listings</li>
          <li>🛒 Marketplace</li>
          <li>💬 Messages</li>
          <li>⚙️ Settings</li>
        </ul>
      </div>

      <div className="main-content">
        <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom">
          <h5 className="m-0">Welcome, Students 👋</h5>
          <Button variant="outline-danger" size="sm">Logout</Button>
        </header>

        <Container fluid className="px-4 py-4">
          <Row className="g-4">
            <Col md={3}>
              <Card className="summary-card text-center">
                <Card.Body>
                  <h6>Total Listings</h6>
                  <h3>24</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="summary-card text-center">
                <Card.Body>
                  <h6>Items Sold</h6>
                  <h3>12</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="summary-card text-center">
                <Card.Body>
                  <h6>Unread Messages</h6>
                  <h3>4</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="summary-card text-center">
                <Card.Body>
                  <h6>Wishlist</h6>
                  <h3>8</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <Card>
                <Card.Header>
                  <h6>Recent Activity</h6>
                </Card.Header>
                <Card.Body>
                  <ul className="recent-activity">
                    <li>📦 You posted a new item: "Casio Calculator" (2 hrs ago)</li>
                    <li>💬 You received a message from Riya (5 hrs ago)</li>
                    <li>✅ You sold "Course Notes - B.Tech CSE" (Yesterday)</li>
                    <li>🛒 You added "Scientific Calculator" to wishlist</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Dashhome;


{/* dashcss */}
.dashboard {
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
}

.sidebar {
  width: 220px;
  background-color: #619fcc;
  color: white;
  padding-top: 20px;
  height: 100%;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin-top: 30px;
}

.sidebar li {
  padding: 12px 20px;
  cursor: pointer;
}

.sidebar li:hover {
  background-color: rgba(255, 255, 255, 0.15);
}

.main-content {
  flex-grow: 1;
  background-color: #f8f9fa;
  overflow-y: auto;
}

.summary-card {
  background: white;
  border-left: 5px solid #007bff;
  transition: 0.3s;
}

.summary-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.recent-activity {
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
}

.recent-activity li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

        </>
    )
}
export default Demo;