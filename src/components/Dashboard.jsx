
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Dashboard = ({ items }) => {
  const navigate = useNavigate(); 

  const getStockColor = (quantity) => {
    if (quantity < 5) return 'badge-danger';
    if (quantity < 20) return 'badge-warning';
    return 'badge-success';
  };

  return (
    <div className="dashboard mt-5">
      
      
     
      <button className="btn btn-secondary mb-3" onClick={() => navigate('/')}>
        Back
      </button>
      
      <table className="table table-bordered table-hover">
        <thead className="table-success">
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Stock Level</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.category}</td>
                <td>{item.supplier}</td>
                <td>
                  <span className={`badge ${getStockColor(item.quantity)}`}>
                    {item.quantity < 5 ? 'Low' : item.quantity < 20 ? 'Moderate' : 'Sufficient'}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
            
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
