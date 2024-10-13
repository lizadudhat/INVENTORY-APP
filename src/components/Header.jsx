
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate(); 

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-success text-white">
      <h1 className="h3">Inventory Management</h1>
      <button className="btn btn-light" onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
    </header>
  );
};

export default Header;
