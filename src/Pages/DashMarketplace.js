
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Carousel, Dropdown, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import "./DashMarket.css";
import Img from '../Assets/Images/K.jpg';
import gmi from '../Assets/Images/M.jpg';
import lp from '../Assets/Images/lp.png';
import cc from '../Assets/Images/Calc.webp';
import edk from '../Assets/Images/edk.webp';
import b from '../Assets/Images/book.jpeg';
import ww from '../Assets/Images/ww.jpeg';
import ss from '../Assets/Images/ss.jpeg';
import CloseButton from 'react-bootstrap/CloseButton';


const allProducts = [
  { id: 1, name: "Casio Calculator", price: 500, category: "Electronics", img: cc, desc: "Casio FX-991ES scientific calculator, perfect for engineering students." },
  { id: 2, name: "Laptop HP i5", price: 40000, category: "Electronics", img: lp, desc: "HP Pavilion i5 laptop with 8GB RAM, 512GB SSD." },
  { id: 3, name: "Engineering Drawing Kit", price: 300, category: "Stationery", img: edk, desc: "Full set of drawing tools for engineering graphics." },
  { id: 4, name: "B.Tech CSE Notes", price: 150, category: "Books", img: b, desc: "Handwritten notes covering 1st year B.Tech CSE syllabus." },
  { id: 5, name: "Smart Watch", price: 2500, category: "Electronics", img: ww, desc: "Smartwatch with fitness tracking and notifications." },
  { id: 6, name: "Adidas Shoes", price: 2000, category: "Accessories", img: ss, desc: "Comfortable Adidas running shoes, size 9." },
];

const categories = ["All", "Books", "Stationery", "Electronics", "Accessories"];

function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState(allProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredProducts = products.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (type) => {
    let sorted = [...filteredProducts];
    if (type === "priceLow") sorted.sort((a, b) => a.price - b.price);
    if (type === "priceHigh") sorted.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  const handleShowProduct = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="marketplace-page">
      <Container className="py-4">
        {/* Featured Carousel */}
        
        <Carousel className="mb-5 shadow carousel-featured">
          <Carousel.Item>
            <img src={Img} alt="Featured" width={1300} height={450}/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={gmi} width={1300} height={450} alt="Featured" />
           
          </Carousel.Item>
        </Carousel>

        {/* Search & Filters */}
        <Row className="mb-4 align-items-center">
          <Col md={7}>
            <Form.Control
              type="text"
              placeholder="🔍Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-bar"
            />
          </Col>
          <Col className="category-buttons">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === selectedCategory ? "primary" : "outline-primary"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </Col>
          <Col  className="text-end">
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" size="sm">Sort By</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSort("priceLow")}>Price: Low to High</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort("priceHigh")}>Price: High to Low</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        {/* Product Grid */}
        <Row className="g-4">
          {filteredProducts.map((product, index) => (
            <Col md={4} sm={6} key={product.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Card className="product-card shadow-sm" onClick={() => handleShowProduct(product)}>
                  <div className="product-img-wrapper">
                    <Card.Img variant="top" src={product.img} className="product-img" />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="price">₹{product.price}</Card.Text>
                    <Button variant="primary" className="me-2">Add to Cart</Button>
                    <Button variant="outline-secondary">Wishlist</Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Product Modal */}
      {selectedProduct && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
              className="img-fluid mb-3"
              style={{ borderRadius: "10px" }}
            />
            <p>{selectedProduct.desc}</p>
            <h5 className="text-primary">₹{selectedProduct.price}</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
            <Button variant="primary">Add to Cart</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default MarketplacePage;
