import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./DashContact.css";

function ContactUsPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! We'll contact you soon.`);
  };

  return (
    <div className="contact-us-page">
      <Container className="py-5">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4 fw-bold"
        >
          Contact Us  ☎️
        </motion.h2>
        <Row className="g-4">
          {/* Contact Form */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-4 shadow-lg border-0">
                <h4 className="mb-3">Get in Touch</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card>
            </motion.div>
          </Col>

          {/* Contact Info */}
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-4 shadow-lg border-0 contact-info">
                <h4 className="mb-3">Contact Information</h4>
                <p><strong>Email:</strong> support@vcm.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Address:</strong> Virtual Campus, India</p>
                <div className="social-links mt-3">
                  <Button variant="outline-primary" className="me-2">
                    <i className="bi bi-facebook"></i>
                  </Button>
                  <Button variant="outline-info" className="me-2">
                    <i className="bi bi-twitter"></i>
                  </Button>
                  <Button variant="outline-danger">
                    <i className="bi bi-instagram"></i>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUsPage;
