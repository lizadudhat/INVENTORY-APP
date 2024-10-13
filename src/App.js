
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ItemForm from './components/ItemForm';
import SupplierForm from './components/SupplierForm';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);  
  const [suppliers, setSuppliers] = useState([ 
    { id: 1, name: ' nick.j' },
    { id: 2, name: 'mehul.m' },
    { id: 3, name: 'arav.m.patel' },
  ]);  
  const [categories] = useState(['Electronics', 'Furniture', 'Groceries']);  
  const [filteredItems, setFilteredItems] = useState([]); 

  return (
    <Router>
      <div className="container">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <FormWrapper 
              items={items} 
              setItems={setItems} 
              suppliers={suppliers} 
              setSuppliers={setSuppliers} 
              categories={categories} 
              setFilteredItems={setFilteredItems} 
            />
          } />
          <Route path="/dashboard" element={
            <Dashboard items={filteredItems.length > 0 ? filteredItems : items} />
          } />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect all other routes */}
        </Routes>
      </div>
    </Router>
  );
};

// FormWrapper component to handle the form logic and navigation
const FormWrapper = ({ items, setItems, suppliers, setSuppliers, categories, setFilteredItems }) => {
  const navigate = useNavigate();

  // Add a new item to the inventory
  const addItem = (newItem) => {
    const updatedItems = [...items, { id: Date.now(), ...newItem }];
    setItems(updatedItems);
    setFilteredItems(updatedItems);
    navigate('/dashboard'); // Navigate to the dashboard after adding an item
  };

  // Add a new supplier to the supplier list
  const addSupplier = (newSupplier) => {
    setSuppliers([...suppliers, { id: Date.now(), ...newSupplier }]);
  };

  // Handle filtering functionality (by category or supplier)
  const handleFilterChange = (type, value) => {
    let updatedItems = [...items];

    if (type === 'category' && value) {
      updatedItems = updatedItems.filter(item => item.category === value);
    } else if (type === 'supplier' && value) {
      updatedItems = updatedItems.filter(item => item.supplier === value);
    }

    setFilteredItems(updatedItems);
  };

  return (
    <div>
      {/* Item Form and Supplier Form */}
      <div className="row">
        <div className="col-md-6">
          <ItemForm
            onSubmit={addItem}
            suppliers={suppliers.map((s) => s.name)} 
            categories={categories}
          />
        </div>
        <div className="col-md-6">
          <SupplierForm onSubmit={addSupplier} />
        </div>
      </div>

      {/* Filter Section */}
      <Filter
        categories={categories}
        suppliers={suppliers.map((s) => s.name)} 
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
