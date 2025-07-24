import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './LoginPage.css';
import Img from '../Assets/Images/logo1.jpg';
import CloseButton from 'react-bootstrap/CloseButton';
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Dashlogin() {
  return (
    <div className="login-page">
      <Container>
        <Row className="min-vh-100 align-items-center justify-content-center">
          <Col md={6} lg={5}>
            <Card className="login-card p-4 shadow rounded-4">
              <div className="position-relative">
      
    </div>
              <div className="text-center mb-4">
                <img
                  src={Img} 
                  className="login-logo mb-2"
                />
                <h4 className="fw-bold">Virtual Campus Marketplace</h4>
                <p className="text-muted small">Login to your dashboard</p>
              </div>

              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                 <Nav.Link as={NavLink} end to="/" className="side-link">Login</Nav.Link> 
                </Button>

                <div className="text-center">
                  <a href="#!" className="text-muted small">Forgot password?</a>
                </div>
              </Form>

              <hr />

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashlogin;
