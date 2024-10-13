
import React from 'react';
import '../App.css';

const Filter = ({ categories, suppliers, onFilterChange }) => {
  return (
    <div className="filter-section my-4 p-3 border rounded bg-light">
      <h4>Filter Items</h4>
      <div className="mb-3">
        <label className="form-label">Filter by Category:</label>
        <select
          className="form-select"
          onChange={(e) => onFilterChange('category', e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Filter by Supplier:</label>
        <select
          className="form-select"
          onChange={(e) => onFilterChange('supplier', e.target.value)}
        >
          <option value="">All</option>
          {suppliers.map((supplier) => (
            <option key={supplier} value={supplier}>
              {supplier}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
