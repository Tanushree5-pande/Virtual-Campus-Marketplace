// Pages/HomeDashboard.jsx
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Pie, Bar } from "react-chartjs-2";
import CountUp from "react-countup";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import "./DashboardHome.css";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, LinearScale, BarElement);

function HomeDashboard() {
  // Pie Chart Data
  const pieData = {
    labels: ["Listings", "Sold", "Wishlist"],
    datasets: [
      {
        label: "Status",
        data: [24, 12, 8],
        backgroundColor: ["#4C86D7", "#28a745", "#17a2b8"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  // Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Items Sold",
        data: [5, 7, 4, 9, 6, 8],
        backgroundColor: "#28a745",
      },
      {
        label: "New Listings",
        data: [6, 4, 8, 5, 7, 9],
        backgroundColor: "#4C86D7",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <Container fluid className="home-dashboard">
      {/* Animated Gradient Cards */}
      <Row className="g-4 mb-4">
        <Col xs={12} sm={6} lg={3}>
          <Card className="summary-card gradient-card blue-card text-center">
            <Card.Body>
              <h6>Total Listings</h6>
              <h2><Badge bg="light" text="dark"><CountUp end={24} duration={2} /></Badge></h2>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card className="summary-card gradient-card green-card text-center">
            <Card.Body>
              <h6>Items Sold</h6>
              <h2><Badge bg="light" text="dark"><CountUp end={12} duration={2} /></Badge></h2>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card className="summary-card gradient-card yellow-card text-center">
            <Card.Body>
              <h6>Unread Messages</h6>
              <h2><Badge bg="light" text="dark"><CountUp end={4} duration={2} /></Badge></h2>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} lg={3}>
          <Card className="summary-card gradient-card cyan-card text-center">
            <Card.Body>
              <h6>Wishlist</h6>
              <h2><Badge bg="light" text="dark"><CountUp end={8} duration={2} /></Badge></h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Charts Row */}
      <Row className="g-4">
        <Col xs={12} lg={6}>
          <Card className="chart-card shadow-sm">
            <Card.Body>
              <h5 className="mb-3">Listings Overview</h5>
              <Pie data={pieData} options={pieOptions} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <Card className="chart-card shadow-sm">
            <Card.Body>
              <h5 className="mb-3">Monthly Activity</h5>
              <Bar data={barData} options={barOptions} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeDashboard;
