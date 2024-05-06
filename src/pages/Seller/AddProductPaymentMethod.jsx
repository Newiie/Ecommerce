import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SellerHeader from '../../components/SellerHeader.jsx';
import SellerFooter from '../../components/SellerFooter.jsx';
import DescriptionIcon from '../../assets/description-inactive.png';
import CategoryIcon from '../../assets/index-finger-inactive.png';
import ImageIcon from '../../assets/camera-inactive.png';
import DeliveryIcon from '../../assets/delivery-box-active.png';
import DottedLineIcon from '../../assets/dotted-line-icon.png';
import '../../stylesFolder/Seller/AddProductPaymentMethodStyle.css';

function AddProductPaymentMethod() {
  const navigate = useNavigate();

  // State management for selected delivery options, payment methods, and shipping times
  const [selectedDelivery, setSelectedDelivery] = useState([]); // Selected delivery options
  const [selectedPayment, setSelectedPayment] = useState([]); // Selected payment methods
  const [shippingTimes, setShippingTimes] = useState({
    metroManila: { min: 0, max: 0 },
    provincial: { min: 0, max: 0 },
    international: { min: 0, max: 0 },
  });

  // Navigation handlers
  const goBack = () => navigate('/add-product-images'); 
  const goPost = () => navigate('/seller-dashboard');

  // Toggle the selection of a delivery option
  const handleDeliveryChange = (option) => {
    setSelectedDelivery((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  // Toggle the selection of a payment method
  const handlePaymentChange = (option) => {
    setSelectedPayment((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };

  // Update shipping time ranges based on user input
  const handleShippingTimeChange = (region, type, value) => {
    setShippingTimes((prev) => ({
      ...prev,
      [region]: {
        ...prev[region],
        [type]: value,
      },
    }));
  };

  return (
    <>
      <SellerHeader /> {/* Header component */}
      <div className="add-product-payment-container">
        <div className="exclusive">
          {/* Step progress indicator */}
          <div className="product-header-indicator">
            <img src={DescriptionIcon} alt="Description" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={CategoryIcon} alt="Category" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={ImageIcon} alt="Image" className="step-icon" />
            <img src={DottedLineIcon} alt="Dotted Line" className="dotted-line-icon" />
            <img src={DeliveryIcon} alt="Delivery" className="step-icon" />
          </div>
          {/* Delivery and payment form sections */}
          <div className="form-sections">
            {/* Delivery options */}
            <div className="delivery-options-section">
              <h2>Select delivery options</h2>
              <label className="delivery-option">
                <input type="checkbox" onChange={() => handleDeliveryChange('Self pickup')} />
                Self pickup
              </label>
              <label className="delivery-option">
                <input
                  type="checkbox"
                  onChange={() => handleDeliveryChange('Integrated Couriers')}
                />
                Integrated Couriers
              </label>
              <label className="delivery-option">
                <input
                  type="checkbox"
                  onChange={() => handleDeliveryChange('Same-Day/Next Day delivery')}
                />
                Same-Day/Next Day delivery
              </label>
              <label className="delivery-option">
                <input
                  type="checkbox"
                  onChange={() => handleDeliveryChange('International Shipping')}
                />
                International Shipping
              </label>
            </div>
            {/* Payment options */}
            <div className="payment-options-section">
              <h2>Select payment options</h2>
              <label className="payment-option">
                <input
                  type="checkbox"
                  onChange={() => handlePaymentChange('Credit/Debit Cards')}
                />
                Credit/Debit Cards
              </label>
              <label className="payment-option">
                <input
                  type="checkbox"
                  onChange={() => handlePaymentChange('Cash on Delivery')}
                />
                Cash on Delivery
              </label>
              <label className="payment-option">
                <input
                  type="checkbox"
                  onChange={() => handlePaymentChange('Over-the-counter')}
                />
                Over-the-counter
              </label>
              <label className="payment-option">
                <input
                  type="checkbox"
                  onChange={() => handlePaymentChange('Installment Plans')}
                />
                Installment Plans
              </label>
            </div>
          </div>
          {/* Shipping time section */}
          <div className="shipping-time-section">
            <h2>Shipping Time</h2>
            <div className="shipping-time-table">
              <p className="shipping-time-instruction">
                Please adjust the shipping areas according to your shipping capabilities.
              </p>
              <div className="shipping-time-title-row">
                <span></span>
                <span>Minimum day/s</span>
                <span>Maximum day/s</span>
              </div>
              {/* Shipping times for different regions */}
              <div className="shipping-time-row">
                <span>Within Metro Manila</span>
                <input
                  type="number"
                  value={shippingTimes.metroManila.min}
                  onChange={(e) =>
                    handleShippingTimeChange('metroManila', 'min', parseInt(e.target.value))
                  }
                />
                <input
                  type="number"
                  value={shippingTimes.metroManila.max}
                  onChange={(e) =>
                    handleShippingTimeChange('metroManila', 'max', parseInt(e.target.value))
                  }
                />
              </div>
              <div className="shipping-time-row">
                <span>Provincial Areas</span>
                <input
                  type="number"
                  value={shippingTimes.provincial.min}
                  onChange={(e) =>
                    handleShippingTimeChange('provincial', 'min', parseInt(e.target.value))
                  }
                />
                <input
                  type="number"
                  value={shippingTimes.provincial.max}
                  onChange={(e) =>
                    handleShippingTimeChange('provincial', 'max', parseInt(e.target.value))
                  }
                />
              </div>
              <div className="shipping-time-row">
                <span>International Shipping</span>
                <input
                  type="number"
                  value={shippingTimes.international.min}
                  onChange={(e) =>
                    handleShippingTimeChange('international', 'min', parseInt(e.target.value))
                  }
                />
                <input
                  type="number"
                  value={shippingTimes.international.max}
                  onChange={(e) =>
                    handleShippingTimeChange('international', 'max', parseInt(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <button type="button" className="back-button" onClick={goBack}>Back</button>
            <button type="button" className="post-button" onClick={goPost}>Post</button>
          </div>
        </div>
      </div>
      <SellerFooter /> {/* Footer component */}
    </>
  );
}

export default AddProductPaymentMethod;
