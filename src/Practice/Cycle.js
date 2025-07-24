import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cycle() {
  
  const [count, setCount] = useState(0);
  const [demo, setDemo] = useState({
    title:"VCM", 
    configuration:"This is an online shopping website" })
  
  const handleIncrement = () => {
    setCount(count + 1);
    };
    const handleDecrement = () => {
    setCount(count - 1);
  };

     const handleMultiplication = () => {
    setCount(count * 2);
  };

   const handleDivision = () => {
    setCount(count / 2);
  };

   const handleModulous = () => {
    setCount(count % 2);
  };
  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>+</button>{' '}
      <button onClick={handleDecrement}>-</button>{' '}
      <button onClick={handleMultiplication}>*</button>{' '}
      <button onClick={handleDivision}>/</button>{' '}
      <button onClick={handleModulous}>%</button>{' '}

       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{demo.title}</Card.Title>
        <Card.Text>
          {demo.configuration}
        </Card.Text>
        <Button variant="primary" type='button' onClick={() => setDemo.title("Virtual Campus Marketplace") } >Go somewhere</Button>
      </Card.Body>
    </Card>

      </>
    
  );
}

export default Cycle;