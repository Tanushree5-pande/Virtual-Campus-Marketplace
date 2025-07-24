import "./DashboardHome.css";
// Pages/Dashhome.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import Img from "../Assets/Images/logo1.jpg";  // path adjust if needed


function Dashhome() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-box text-center py-3">
          <img src={Img} alt="Virtual Campus Logo" height={80} width={200} />
        </div>
        <ul className="sidebar-nav">
          <li>&nbsp;<Nav.Link as={NavLink} end to="/" className="side-link">&nbsp; &nbsp; &nbsp; 🏠 Home</Nav.Link></li>
          <li><Nav.Link as={NavLink} to="/dashr" className="side-link">&nbsp; &nbsp; &nbsp;📄 Registration</Nav.Link></li>
          <li><Nav.Link as={NavLink} to="/listingsPage" className="side-link">&nbsp; &nbsp; &nbsp;✅ Listing</Nav.Link></li>
           <li><Nav.Link as={NavLink} to="/contact" className="side-link">&nbsp; &nbsp; &nbsp;☎️ Contact Us</Nav.Link></li>
           <li><Nav.Link as={NavLink} to="/about" className="side-link">&nbsp; &nbsp; &nbsp;🙍‍♂️ About Us</Nav.Link></li>
           <li><Nav.Link as={NavLink} to="/login" className="side-link">&nbsp; &nbsp; &nbsp;📤 LogOut</Nav.Link></li>
        </ul>
      </aside>

      {/* Main Area */}
      <div className="main-content">
        {/* Top header stays on all pages */}
        <header className="dashboard-header d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white shadow-sm">
          <h5 className="m-0 fw-bold">
            Welcome, Students <span role="img" aria-label="wave">👋</span>
          </h5>
        </header>

        {/* Page content goes here */}
        <div className="dashboard-page-wrapper px-4 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashhome;
