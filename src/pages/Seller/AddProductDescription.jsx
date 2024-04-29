import React from 'react';
import SellerHeader from '../../components/SellerHeader.jsx';
import SellerFooter from '../../components/SellerFooter.jsx';
import DescriptionIcon from '../../assets/description-icon-clicked.png';
import CategoryIcon from '../../assets/category-icon-unclicked.png';
import ImageIcon from '../../assets/choose-images-icon-unclicked.png';
import DeliveryIcon from '../../assets/delivery-options-icon-unclicked.png';
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
          <div className="form-group">
            <div className="column">
              <div>
                <label htmlFor="title" className="label-aligned">Title</label>
                <input type="text" id="title" name="title" maxLength="60" placeholder="Title" style={{ padding: '0.75rem', fontSize: '1rem' }} />
                <div className="char-count">0/60</div>
              </div>
              <div>
                <label htmlFor="description" className="label-aligned">Description</label>
                <textarea id="description" name="description" maxLength="120" placeholder="Description" style={{ padding: '0.75rem', fontSize: '1rem', height: '150px' }}></textarea>
                <div className="char-count">0/120</div>
              </div>
            </div>
            <div className="column">
              <div>
                <label htmlFor="number" className="label-aligned">Number of units available</label>
                <input type="number" id="number" name="number" placeholder="Availability (number)" style={{ padding: '0.75rem', fontSize: '1rem' }} />
              </div>
              <div>
                <label htmlFor="dimensions" className="label-aligned">Dimensions (Optional)</label>
                <div className="dimensions">
                  <div>
                    <label htmlFor="length" className="label-aligned">Length(mm)</label>
                    <input type="number" id="length" name="length" placeholder="0" style={{ padding: '0.75rem', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <label htmlFor="width" className="label-aligned">Width(mm)</label>
                    <input type="number" id="width" name="width" placeholder="0" style={{ padding: '0.75rem', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <label htmlFor="height" className="label-aligned">Height(mm)</label>
                    <input type="number" id="height" name="height" placeholder="0" style={{ padding: '0.75rem', fontSize: '1rem' }} />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="price" className="label-aligned">Price</label>
                <input type="number" id="price" name="price" placeholder="Price" style={{ padding: '0.75rem', fontSize: '1rem' }} />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="button" className="next-button">Next</button>
          </div>
        </div>
      </div>
      <SellerFooter />
    </>
  );
}

export default AddProductDescription;