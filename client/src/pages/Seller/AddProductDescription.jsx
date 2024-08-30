import React from 'react';
import { useNavigate } from 'react-router-dom';
import SellerHeader from '../../components/SellerHeader.jsx';
import SellerFooter from '../../components/SellerFooter.jsx';
import DescriptionIcon from '../../assets/description-active.png';
import CategoryIcon from '../../assets/index-finger-inactive.png';
import ImageIcon from '../../assets/camera-inactive.png';
import DeliveryIcon from '../../assets/delivery-box-inactive.png';
import DottedLineIcon from '../../assets/dotted-line-icon.png';
import '../../stylesFolder/Seller/AddProductDescriptionStyle.css';

function AddProductDescription() {
  const navigate = useNavigate(); 

  // Navigates to the seller dashboard
  const goBack = () => {
    navigate('/seller-dashboard');
  };

  // Navigates to the product category step
  const goNext = () => {
    navigate('/add-product-category');
  };

  return (
    <>
      <SellerHeader /> {/* Header component */}
      <div className="add-product-description-container">
        {/* Product step progress icons */}
        <div className="product-header-indicator">
          <img src={DescriptionIcon} alt="Description" className="step-icon" />
          <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
          <img src={CategoryIcon} alt="Category" className="step-icon" />
          <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
          <img src={ImageIcon} alt="Image" className="step-icon" />
          <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
          <img src={DeliveryIcon} alt="Delivery" className="step-icon" />
        </div>
        {/* Page heading */}
        <div className="description-heading">
          <h2 style={{ fontSize: '1rem', textAlign: 'left' }}>
            Fill in the basic information about your item
          </h2>
        </div>
        {/* Form layout */}
        <div className="form-group">
          <div className="column">
            <div>
              <label htmlFor="title" className="label-aligned">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                maxLength="60"
                placeholder="Title"
                style={{ padding: '0.75rem', fontSize: '1rem' }}
              />
              <div className="char-count">0/60</div>
            </div>
            <div>
              <label htmlFor="description" className="label-aligned">Description</label>
              <textarea
                id="description"
                name="description"
                maxLength="120"
                placeholder="Description"
                style={{ padding: '0.75rem', fontSize: '1rem', height: '253.5px' }}
              ></textarea>
              <div className="char-count">0/120</div>
            </div>
          </div>
          <div className="column">
            {/* Availability and optional dimensions */}
            <div>
              <label htmlFor="number" className="label-aligned">Number of units available</label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Availability (number)"
                style={{ padding: '0.75rem', fontSize: '1rem' }}
              />
            </div>
            <div>
              <label htmlFor="dimensions" className="label-aligned">Dimensions (Optional)</label>
              <div className="dimensions">
                <div>
                  <label htmlFor="length" className="label-aligned">Length(mm)</label>
                  <input
                    type="number"
                    id="length"
                    name="length"
                    placeholder="0"
                    style={{ padding: '0.75rem', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="width" className="label-aligned">Width(mm)</label>
                  <input
                    type="number"
                    id="width"
                    name="width"
                    placeholder="0"
                    style={{ padding: '0.75rem', fontSize: '1rem' }}
                  />
                </div>
                <div>
                  <label htmlFor="height" className="label-aligned">Height(mm)</label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    placeholder="0"
                    style={{ padding: '0.75rem', fontSize: '1rem' }}
                  />
                </div>
              </div>
            </div>
            {/* Price input */}
            <div>
              <label htmlFor="price" className="label-aligned">Price</label>
              <input
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                style={{ padding: '0.75rem', fontSize: '1rem' }}
              />
            </div>
          </div>
        </div>
        {/* Navigation buttons */}
        <div
          className="navigation-buttons"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button type="button" className="back-button" onClick={goBack}>Back</button>
          <button type="button" className="next-button" onClick={goNext}>Next</button>
        </div>
      </div>
      <SellerFooter /> {/* Footer component */}
    </>
  );
}

export default AddProductDescription;
