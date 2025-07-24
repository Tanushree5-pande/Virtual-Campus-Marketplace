// table.js
import React, { useState, useEffect, useMemo } from "react";
import { Table, Button, Modal, Form, Row, Col, InputGroup, Badge, OverlayTrigger, Tooltip,} from "react-bootstrap";
import PropTypes from "prop-types";
import "./Table.css";
/*
  DataTable props:
    storageKey   : localStorage key for persistence (default "vcmp_listings")
    showSummary  : show cards summary row (default true)
    allowAdd     : show "Add New" button (default true)
    allowEdit    : true
    allowDelete  : true
    columns      : optional array to customize columns (see defaultCols below)
*/

const defaultCols = [
  { key: "name", label: "Name", required: true },
  { key: "email", label: "Email", required: true },
  { key: "mobile", label: "Mobile", required: true },
  { key: "item", label: "Item / Course", required: false },
];

function DataTable({
  storageKey = "vcmp_listings",
  showSummary = true,
  allowAdd = true,
  allowEdit = true,
  allowDelete = true,
  columns = defaultCols,
}) {
  /* --------------------------------------------------
   * Local State
   * -------------------------------------------------- */
  const [records, setRecords] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  // modal
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null); // null=new
  const [formData, setFormData] = useState(initForm(columns));

  // delete confirm
  const [deleteIndex, setDeleteIndex] = useState(null);

  /* --------------------------------------------------
   * Load + Save localStorage
   * -------------------------------------------------- */
  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setRecords(parsed);
        }
      } catch {
        /* ignore */
      }
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(records));
  }, [records, storageKey]);

  /* --------------------------------------------------
   * Derived filtered/sorted records
   * -------------------------------------------------- */
  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    let r = !term
      ? records
      : records.filter((rec) =>
          columns.some((c) =>
            (rec[c.key] || "").toString().toLowerCase().includes(term)
          )
        );
    r = [...r].sort((a, b) => {
      const av = (a.name || "").toLowerCase();
      const bv = (b.name || "").toLowerCase();
      if (av < bv) return sortAsc ? -1 : 1;
      if (av > bv) return sortAsc ? 1 : -1;
      return 0;
    });
    return r;
  }, [records, search, sortAsc, columns]);

  /* --------------------------------------------------
   * Form helpers
   * -------------------------------------------------- */
  function initForm(cols) {
    const obj = {};
    cols.forEach((c) => (obj[c.key] = ""));
    return obj;
  }

  function openAdd() {
    setEditIndex(null);
    setFormData(initForm(columns));
    setShowModal(true);
  }

  function openEdit(idx) {
    setEditIndex(idx);
    setFormData({ ...records[idx] });
    setShowModal(true);
  }

  function handleModalClose() {
    setShowModal(false);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // basic validation
    for (const col of columns) {
      if (col.required && !formData[col.key].trim()) {
        alert(`${col.label} required`);
        return;
      }
    }
    if (editIndex === null) {
      // add new
      setRecords((s) => [...s, { ...formData, id: genId() }]);
    } else {
      // update existing
      setRecords((s) =>
        s.map((rec, i) => (i === editIndex ? { ...rec, ...formData } : rec))
      );
    }
    setShowModal(false);
  }

  function confirmDelete(idx) {
    setDeleteIndex(idx);
  }

  function doDelete() {
    if (deleteIndex !== null) {
      setRecords((s) => s.filter((_, i) => i !== deleteIndex));
    }
    setDeleteIndex(null);
  }

  function cancelDelete() {
    setDeleteIndex(null);
  }

  /* --------------------------------------------------
   * Summary counts
   * (Fake counts from data just to show numbers; you can wire real)
   * -------------------------------------------------- */
  const summary = useMemo(() => {
    const total = records.length;
    // demo logic:
    const sold = Math.floor(total / 2);
    const unread = Math.max(0, total - sold - 1);
    const wish = Math.max(0, total - sold - unread);
    return { total, sold, unread, wish };
  }, [records]);

  /* --------------------------------------------------
   * Render
   * -------------------------------------------------- */
  return (
    <div className="vcmp-table-wrapper">
      {showSummary && <SummaryRow {...summary} />}

      <div className="vcmp-table-toolbar">
        <InputGroup style={{ maxWidth: 300 }}>
          <Form.Control
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="sm"
          />
          <Button
            variant="outline-light"
            size="sm"
            onClick={() => setSortAsc((s) => !s)}
            title="Toggle sort by Name"
          >
            {sortAsc ? "A→Z" : "Z→A"}
          </Button>
        </InputGroup>

        {allowAdd && (
          <Button
            variant="success"
            size="sm"
            className="ms-auto"
            onClick={openAdd}
          >
            + Add New
          </Button>
        )}
      </div>

      <div className="vcmp-table-scroll">
        <Table
          responsive
          hover
          bordered={false}
          className="vcmp-table align-middle mb-0"
        >
          <thead>
            <tr>
              <th style={{ width: "60px" }}>S/N</th>
              {columns.map((c) => (
                <th key={c.key}>{c.label}</th>
              ))}
              {(allowEdit || allowDelete) && (
                <th style={{ width: "120px" }}>Action</th>
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td colSpan={columns.length + 2} className="text-center py-4">
                  No records found.
                </td>
              </tr>
            )}
            {filtered.map((rec, idx) => {
              // locate real index in records (for editing/deleting)
              const realIndex = records.indexOf(rec);
              return (
                <tr key={rec.id || idx}>
                  <td>{idx + 1}</td>
                  {columns.map((c) => (
                    <td key={c.key}>{rec[c.key]}</td>
                  ))}
                  {(allowEdit || allowDelete) && (
                    <td className="text-center">
                      {allowEdit && (
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Edit</Tooltip>}
                        >
                          <Button
                            variant="outline-primary"
                            size="sm"
                            className="me-1"
                            onClick={() => openEdit(realIndex)}
                          >
                            ✏️
                          </Button>
                        </OverlayTrigger>
                      )}
                      {allowDelete && (
                        <OverlayTrigger
                          placement="top"
                          overlay={<Tooltip>Delete</Tooltip>}
                        >
                          <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => confirmDelete(realIndex)}
                          >
                            🗑️
                          </Button>
                        </OverlayTrigger>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      {/* Add/Edit Modal */}
      <Modal show={showModal} onHide={handleModalClose} centered>
        <Form onSubmit={handleFormSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editIndex === null ? "Add New Record" : "Edit Record"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="g-3">
              {columns.map((c) => (
                <Col xs={12} key={c.key}>
                  <Form.Group controlId={`form-${c.key}`}>
                    <Form.Label>{c.label}</Form.Label>
                    <Form.Control
                      name={c.key}
                      value={formData[c.key] || ""}
                      onChange={handleFormChange}
                      required={c.required}
                      type="text"
                      placeholder={c.label}
                    />
                  </Form.Group>
                </Col>
              ))}
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {editIndex === null ? "Add" : "Save"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Delete Confirm Modal */}
      <Modal show={deleteIndex !== null} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this record? This action cannot be
          undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={doDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

/* --------------------------------------------------
 * Summary cards row (matches your dashboard vibe)
 * -------------------------------------------------- */
function SummaryRow({ total, sold, unread, wish }) {
  return (
    <Row className="g-3 mb-3 vcmp-summary-row">
      <Col xs={6} md={3}>
        <SummaryCard title="Total Listings" value={total} variant="primary" />
      </Col>
      <Col xs={6} md={3}>
        <SummaryCard title="Items Sold" value={sold} variant="success" />
      </Col>
      <Col xs={6} md={3}>
        <SummaryCard title="Unread Messages" value={unread} variant="warning" />
      </Col>
      <Col xs={6} md={3}>
        <SummaryCard title="Wishlist" value={wish} variant="info" />
      </Col>
    </Row>
  );
}

function SummaryCard({ title, value, variant }) {
  return (
    <div className="vcmp-summary-card text-center bg-white shadow-sm rounded p-3">
      <h6 className="mb-2">{title}</h6>
      <h2 className="m-0">
        <Badge bg={variant}>{value}</Badge>
      </h2>
    </div>
  );
}

/* --------------------------------------------------
 * Utilities
 * -------------------------------------------------- */
function genId() {
  return Math.random().toString(36).slice(2, 9);
}

/* PropTypes (optional) */
DataTable.propTypes = {
  storageKey: PropTypes.string,
  showSummary: PropTypes.bool,
  allowAdd: PropTypes.bool,
  allowEdit: PropTypes.bool,
  allowDelete: PropTypes.bool,
  columns: PropTypes.array,
};

export default DataTable;
