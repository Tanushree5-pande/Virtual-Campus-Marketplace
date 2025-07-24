import React from "react";
import "./DashAboutus.css";
import Img from '../Assets/Images/Abou.jpg';
const AboutUs = () => {
  return (
    <div className="about-us-page">
      <div className="about-us-container">
        <div className="about-us-text">
          <h1>About <span>Us</span></h1>
          <h2>Who We Are</h2>
          <p>
            Welcome to the Virtual Campus Marketplace – a platform created for students, by students. 
            We are a team passionate about simplifying campus life by enabling smart, secure, and sustainable transactions.
          </p>
          <p>
            Our mission is to create an ecosystem where buying, selling, and connecting is just a click away — fast, eco-friendly, and student-focused!
          </p>
          <button className="about-button">Learn More</button>
        </div>

        <div className="about-us-card">
          <div className="card-icon">
            <img src={Img} height={400} width={400}/>
          </div>
          <div className="card-lines">
            <div className="line line1"><h1>Welcome to VCM</h1></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
