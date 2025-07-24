import React from "react";
import Card from 'react-bootstrap/Card';
import {Container,Row,Col} from 'react-bootstrap';

function Testprops(props){
  
    return(
        <>
            <Container>
                <Row>
                    <Col md='3'>
                         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text>
       
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Testprops;