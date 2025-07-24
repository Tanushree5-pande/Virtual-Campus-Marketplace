import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Assets/Images/Hotlogo.webp';
import Carousel from 'react-bootstrap/Carousel';
import Anu from '../Assets/Images/Slider.jpg';
import img from '../Assets/Images/kesari.webp';
import imgs from '../Assets/Images/Salaar.webp';
import imge from '../Assets/Images/Bhedia.webp';
import imgp from '../Assets/Images/Munjya.webp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Hotstar() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={Logo} height={100} width={100}/>
        <Navbar.Brand href="#home"><h1>Disney+Hotstar</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    {/* // Slider */}
        <Carousel>
      <Carousel.Item>
         <img src={Anu} text="First slide" height={500} width={1500}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={Anu} text="First slide" height={500} width={1500}  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={Anu} text="First slide" height={500} width={1500} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
   
    <Container>
                <Row>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="Deva" src={img} />
                            <Card.Body>
                                <Card.Title>jaganatham Bhagwan</Card.Title>
                                <Card.Text>
                                    "aaaa"
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="Cardimage" src={imge} />
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
                            <Card.Img variant="top" src={imgp} />
                            <Card.Body>
                                <Card.Title>Radha-Krishna</Card.Title>
                                <Card.Text>
                                    "aaaaa"
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="Cardimage" src={imgs} />
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
    </>
  );
}

export default Hotstar;