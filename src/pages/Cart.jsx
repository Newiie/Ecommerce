import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import CartItem from '../components/CartItem'
import '../stylesFolder/Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <div>
        <Header />
        <div className="cart-container">
            <CartItem product={"Product"} price={"Price"} quantity={"Quantity"} subtotal={"Subtotal"} />
            <CartItem product={"SAMPLE PRODUCT"} price={"$40"} quantity={50} subtotal={"$650"} />
            <CartItem product={"SAMPLE PRODUCT NVIDIA"} price={"$40"} quantity={50} subtotal={"$650"} />
            <CartItem product={"SAMPLE"} price={"$40"} quantity={50} subtotal={"$650"} />
        </div>
        <div className="btn-container-cart ">
            <button className='item-button-cart' onClick={() => {
              navigate("/")
            }}>Return to Shop</button>
            <button className='item-button-cart'>Update Cart</button>
        </div>

        <div className="cart-total-ctnr">
          <div className="coupon-ctnr">
            <input className='cart-input' type="text" placeholder='Enter Coupon Code' />
            <button type="submit" className="cart-btn-2">Apply Coupon</button>
          </div>
          <div className="total-ctnr">
            <p>Cart Total</p>
            <div className="cart-ul-item">
              <div className="ul-item-nane">Subtotal :</div>
              <div className="ul-item-price">$1750</div>
            </div>
            <div className="cart-ul-item">
              <div className="ul-item-nane">Shipping :</div>
              <div className="ul-item-price">Free</div>
            </div>
            <div className="cart-ul-price">
              <div>Total:</div>
              <div className="ul-item-price">$1750</div>
            </div>
          <button className='cart-btn-2'>Checkout</button>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart
