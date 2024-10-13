import React, { useState } from 'react';
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
const SupplierForm = ({ onSubmit, defaultValues }) => {
  const [supplier, setSupplier] = useState(defaultValues || {
    name: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(supplier); 
    setSupplier({ name: '', contact: '' }); 
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h3 className="mb-3">Add Supplier</h3>
      <div className="mb-3">
        <label className="form-label">Supplier Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={supplier.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Contact Details:</label>
        <input
          type="text"
          name="contact"
          className="form-control"
          value={supplier.contact}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-success w-100">Save Supplier</button>
    </form>
  );
};

export default SupplierForm;
