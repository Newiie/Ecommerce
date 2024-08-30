import React from 'react'
import '../stylesFolder/Cart.css'
import { useNavigate } from 'react-router-dom'


const NotFoundBody = () => {
  const navigate = useNavigate();
  return (
    <div className='not-found-content'>
      <h1 className='not-found-header'>404 Not Found!</h1>
      <p className='not-found-p'>Your visited page not found. You may go home page.</p>
      <button className='cart-btn-2' onClick={() => {
        navigate("/")
      }} >Back to home page</button>
    </div>
  )
}

export default NotFoundBody
