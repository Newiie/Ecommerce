import React from 'react'
import '../stylesFolder/components.css'


const CartItem = ({product, price, subtotal, quantity}) => {
  return (
    <div className='cart-item'>
      <p className='t-s'>{product}</p>
      <p className='t-c'>{price}</p>
      <p className='t-c'>{quantity}</p>
      <p className='t-c'>{subtotal}</p>
    </div>
  )
}

export default CartItem
