import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

export default function MyListingsPage({ storageKey = "vcmp_listings" }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    function load() {
      try {
        const raw = localStorage.getItem(storageKey);
        const parsed = raw ? JSON.parse(raw) : [];
        setRecords(Array.isArray(parsed) ? parsed : []);
      } catch {
        setRecords([]);
      }
    }
    load();

    // Update if another tab updates the data
    function handleStorage(e) {
      if (e.key === storageKey) load();
    }
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [storageKey]);

  return (
    <div>
      <h4 className="mb-3">My Listings</h4>
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Item / Course</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 && (
            <tr>
              <td colSpan={5} className="text-center">
                No records added yet.
              </td>
            </tr>
          )}
          {records.map((r, i) => (
            <tr key={r.id || i}>
              <td>{i + 1}</td>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.mobile}</td>
              <td>{r.item}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
