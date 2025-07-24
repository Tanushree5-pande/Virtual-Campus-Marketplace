import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

export default function DashRegistration() {
  const storageKey = "vcmp_listings";
  const [records, setRecords] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", item: "" });

  // Load Data from Local Storage
  useEffect(() => {
    const savedData = localStorage.getItem(storageKey);
    if (savedData) setRecords(JSON.parse(savedData));
  }, []);

  // Save to Local Storage
  const saveToLocalStorage = (data) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  };

  // Open Add/Edit Modal
  const handleShow = (index = null) => {
    setEditIndex(index);
    if (index !== null) setFormData(records[index]);
    else setFormData({ name: "", email: "", mobile: "", item: "" });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Handle Form Input
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Add or Edit Record
  const handleSave = () => {
    let updatedRecords;
    if (editIndex !== null) {
      updatedRecords = records.map((rec, i) => (i === editIndex ? formData : rec));
    } else {
      updatedRecords = [...records, formData];
    }
    setRecords(updatedRecords);
    saveToLocalStorage(updatedRecords);
    setShowModal(false);
  };

  // Delete Record
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updatedRecords = records.filter((_, i) => i !== index);
      setRecords(updatedRecords);
      saveToLocalStorage(updatedRecords);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4">Registration Records</h2>
      <Button variant="primary" className="mb-3" onClick={() => handleShow()}>
        + Add New Record
      </Button>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Item/Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center">
                No records found.
              </td>
            </tr>
          )}
          {records.map((rec, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{rec.name}</td>
              <td>{rec.email}</td>
              <td>{rec.mobile}</td>
              <td>{rec.item}</td>
              <td>
                <Button size="sm" variant="primary" className="me-2" onClick={() => handleShow(i)}>
                  Edit🖊️
                </Button>
                <Button size="sm" variant="danger" onClick={() => handleDelete(i)}>
                  Delete🗑️
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal for Add/Edit */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Edit Record" : "Add New Record"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control name="mobile" value={formData.mobile} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item / Course</Form.Label>
              <Form.Control name="item" value={formData.item} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
