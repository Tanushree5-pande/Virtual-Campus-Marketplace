import React from "react";
import Cardimage from './logo.svg';

import weblogo from './Assets/Images/logo1.jpg'

function Test() {
  return (
    <>
        <a href="#">Home</a><br/>
    <a href="#">About us</a><br/>
    <a href="#">Contact</a><br/>
    <img src={weblogo} height={100}/>

    <h1 style={{color:'brown',backgroundColor:'beige'}}>List of items</h1>
    <h2 className="Tint" >List of items</h2>
    <h3>List of items</h3>
    <h4>List of items</h4>
    <h5>List of items</h5>
    <h6>List of items</h6>

    <hr/>

     <p>Shri Shivaji Vidya Prasarak Sanstha has completed Century of its Foundation. In the era of Industrialization and rapid technological developement, Sanstha decided to start Engineering College & Polytechnic in the year 1983. Sanstha got the permission to start College of Engineering in July 1983 vide letter No.10/TO/1083-35362 dated 08/07/1983 under the guidance of Hon. Dajisaheb Rohidasji Patil, then the Minister of Maharashtra state. The College is approved by AICTE, New Delhi and Accredited by NBA for 3 years and Institution of Engineers(India), an apex body of Engineers.</p>
    
     {/* ss */}
    <u>Underline tag</u><br/>
    <i>Itallic Tag</i><br/>
    
    <ul>
        <li>List of Item</li>
        <li>List of Item</li>
        <li>List of Item</li>
        <li>List of Item</li>
    </ul><br/>
    
    <ol>
        <li>List of Item</li>
        <li>List of Item</li>
        <li>List of Item</li>
        <li>List of Item</li>
    </ol><br/>

    H<sub>2</sub>O<br/>
    2<sup>3</sup><br/>
    <del>Tanushree pande </del><br/>
    <mark>Mark tag</mark><br/>
    
    
    
    </>
  );
}

export default Test;
