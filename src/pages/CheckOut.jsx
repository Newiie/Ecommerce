import Header from '../components/header'
import Footer from '../components/footer'
import CheckOutContent from '../components/CheckOutContent'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();
  return (
    <div className='relative'>
      <Header />
      <CheckOutContent setShowModal={setShowModal} />
      <Footer />
      {showModal && <div className="modal-container">
        <div className='modal'>
          <p>Successfully placed your Order!</p>
          <button onClick={() => {
            setShowModal(false)
            navigate("/")
          }} className='cart-btn-2'>Continue</button>
        </div>
      </div>}
    </div>
  )
}

export default CheckOut
