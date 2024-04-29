import React from 'react';
import SellerHeader from '../../components/SellerHeader.jsx';
import SellerFooter from '../../components/SellerFooter.jsx';
import DescriptionIcon from '../../assets/description-icon-unclicked.png';
import CategoryIcon from '../../assets/category-icon-unclicked.png';
import ImageIcon from '../../assets/choose-images-icon-unclicked.png';
import DeliveryIcon from '../../assets/delivery-options-icon-clicked.png';
import DottedLineIcon from '../../assets/dotted-line-icon.png';
import '../../stylesFolder/Seller/AddProductDescriptionStyle.css';

function AddProductDescription() {
    return (
      <>
        <SellerHeader />
        <div className="add-product-description-container">
          <div className="exclusive">
            <div className="product-header-indicator">
              <a href="/add-product-description">
                <img src={DescriptionIcon} alt="Description" className="step-icon" />
              </a>
              <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
              <a href="/add-product-category">
                <img src={CategoryIcon} alt="Category" className="step-icon" />
              </a>
              <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
              <a href="/add-product-images">
                <img src={ImageIcon} alt="Image" className="step-icon" />
              </a>
              <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
              <a href="/add-product-payment-method">
                <img src={DeliveryIcon} alt="Delivery" className="step-icon" />
              </a>
            </div>
            <h2 style={{ fontSize: '1rem', textAlign: 'left' }}>Fill in the basic information about your item</h2>
        </div>
        </div>
        <SellerFooter />
      </>
    );
  }

export default AddProductDescription;