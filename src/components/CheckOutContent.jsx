/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../stylesFolder/checkout.css';
import { useApp } from '../hooks/AppProvider';
import axios from 'axios';

const CheckOutContent = ({ setShowModal }) => {
  const { cartData, products, totalPrice, SubTotalPrice, userId } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    town: '',
    apartment: '',
    phoneNumber: '',
    emailAddress: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      userId,
      ...formData,
      paymentMethod,
      items: cartData.map(cart => ({
        productID: cart.productID,
        quantity: cart.orderCount
      })),
      totalPrice
    };

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/orders', orderData);

      if (response.status === 201) {
        setShowModal(true);
      }
    } catch (error) {
      setError('Error placing order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!cartData.length || !Object.keys(products).length) {
    return <p>Loading...</p>;
  }

  return (
    <div className='checkout-content'>
      <div className="billing-details">
        <p className='checkout-h2'>Billing Details</p>
        {['fullName', 'address', 'town', 'apartment', 'phoneNumber', 'emailAddress'].map((field) => (
          <div key={field}>
            <label className='pd-none' htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}*
            </label>
            <input
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              className='ck-input'
              type="text"
            />
          </div>
        ))}
      </div>
      <div className="checkout-details">
        <p className="cart-ul-item semi-bold mb-half">ITEMS:</p>
        {cartData.map(cart => {
          const product = products[cart.productID];
          if (!product) {
            return (
              <div className="checkout-item" key={cart.productID}>
                <p>Product not found</p>
                <p className='semi-bold'>N/A</p>
              </div>
            );
          }
          return (
            <div className="checkout-item" key={cart.productID}>
              <p>{product.title}</p>
              <p className='semi-bold'>${cart.orderCount * product.price}</p>
            </div>
          );
        })}
        <div className="cart-ul-item">
          <div className="ul-item-name">Subtotal:</div>
          <div className="ul-item-price">${SubTotalPrice}</div>
        </div>
        <div className="cart-ul-item">
          <div className="ul-item-name">Shipping:</div>
          <div className="ul-item-price">Free</div>
        </div>
        <div className="cart-ul-price">
          <div>Total:</div>
          <div className="ul-item-price">${totalPrice}</div>
        </div>
        <div className="checkout-method">
          {['Bank', 'COD'].map(method => (
            <label className='pd-none' key={method} htmlFor={method}>
              <input
                id={method}
                type="radio"
                name="paymentMethod"
                value={method}
                checked={paymentMethod === method}
                onChange={handlePaymentChange}
              />
              {method}
            </label>
          ))}
          <button
            className='cart-btn-2'
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? 'Placing Order...' : 'Place Order'}
          </button>
          {error && <p className='error-message'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CheckOutContent;
