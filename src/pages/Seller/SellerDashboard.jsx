import React from 'react';
import { useNavigate } from 'react-router-dom';
import SellerHeader from '../../components/SellerHeader.jsx'; 
import SellerFooter from '../../components/SellerFooter.jsx'; 
import PlusIcon from '../../assets/icon-plus-black.png'; 
import RedLineIcon from '../../assets/red-vertical-line.png';
import '../../stylesFolder/Seller/DashboardStyle.css'; 

const SellerDashboard = () => {
  const navigate = useNavigate();
  const handleAddNewProduct = () => {
    navigate('/add-product-description');
  };

  return (
    <>
      <SellerHeader />
      <div className="seller-dashboard">
        <div className="exclusive-section">
          <div className="add-product-box" onClick={handleAddNewProduct}>
            <img src={PlusIcon} alt="Add new product" />
          </div>
        </div>
        <div className="products-section">
          <div className="products-header">
            <div className="product-header-indicator">
              <img src={RedLineIcon} alt="Indicator" className="red-indicator" />
              <h2>Your Products</h2>
            </div>
            <button className="see-all-button">See All</button>
          </div>
          <div className="products-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="product-box"></div>
            ))}
          </div>
        </div>
      </div>
      <SellerFooter />
    </>
  );
};

export default SellerDashboard;
