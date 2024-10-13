import React, { useState } from 'react';
import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
const ItemForm = ({ onSubmit, suppliers, categories, defaultValues }) => {
  const [item, setItem] = useState(defaultValues || {
    name: '',
    quantity: 0,
    category: '',
    supplier: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(item);
  };

  console.log(suppliers);

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      <h3 className="mb-3">Add Inventory Item</h3>
      <div className="mb-3">
        <label className="form-label">Item Name:</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={item.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Quantity:</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={item.quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category:</label>
        <select
          name="category"
          className="form-select"
          value={item.category}
          onChange={handleChange}
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Supplier:</label>
        <select
          name="supplier"
          className="form-select"
          value={item.supplier}
          onChange={handleChange}
          required
        >
          <option value="">Select a supplier</option>
          {suppliers.map((supplier) => (
            <option key={supplier} value={supplier}>
              {supplier}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-success w-100">Save Item</button>
    </form>
  );
};

export default ItemForm;
