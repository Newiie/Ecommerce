import React from 'react';
import { useNavigate } from 'react-router-dom';
import SellerHeader from '../../components/SellerHeader.jsx'; 
import SellerFooter from '../../components/SellerFooter.jsx'; 
import PlusIcon from '../../assets/icon-plus-black.png';
import RedLineIcon from '../../assets/red-vertical-line.png'; 
import '../../stylesFolder/Seller/DashboardStyle.css'; 

const SellerDashboard = () => {
  const navigate = useNavigate(); // React Router's navigation hook

  // Function to navigate to the product description page
  const handleAddNewProduct = () => {
    navigate('/add-product-description');
  };

  return (
    <>
      {/* Render the seller header */}
      <SellerHeader />

      {/* Main container for the dashboard */}
      <div className="seller-dashboard">

        {/* Section for adding new products */}
        <div className="exclusive-section">
          <div className="add-product-box" onClick={handleAddNewProduct}>
            <img src={PlusIcon} alt="Add new product" />
          </div>
        </div>

        {/* Section for listing existing products */}
        <div className="products-section">
          <div className="products-header">
            {/* Section title with an indicator */}
            <div className="product-header-indicator">
              <img src={RedLineIcon} alt="Indicator" className="red-indicator" />
              <h2>Your Products</h2>
            </div>
            <button className="see-all-button">See All</button>
          </div>

          {/* Grid layout for individual product boxes */}
          <div className="products-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="product-box"></div> // Placeholder product boxes
            ))}
          </div>
        </div>
      </div>

      {/* Render the seller footer */}
      <SellerFooter />
    </>
  );
};

export default SellerDashboard;
