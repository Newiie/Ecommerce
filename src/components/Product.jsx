import Jacket from '../assets/jacket.png'
import Heart from '../assets/heart.png'
import Eye from '../assets/eye.png'
import StarFilled from '../assets/star-filled.png'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  const navigate = useNavigate();

  const handleOpenItem = () => {
    console.log("ID" + product.id)
    navigate(`/item/${product.id}`)
  }
  
  return (
    <div className='product' onClick={handleOpenItem} >
      <div className="product-img relative">
        <img src={Jacket} alt="Product Image" />
        <img className='heart-ic' src={Heart} alt="Heart Icon" />
        <img className='eye-ic' src={Eye} alt="Eye Icon" />
      </div>
      <p className='fs-20'>{product.name}</p>
      <p className='secondary2 fs-20 fw-m'>${product.price}</p>
      <div className='product-review'>
        <img src={StarFilled} alt="" />
        <img src={StarFilled} alt="" />
        <img src={StarFilled} alt="" />
        <img src={StarFilled} alt="" />
        <img src={StarFilled} alt="" />
        <p className='fs-20 black7'>(65)</p>
      </div>
    </div>
  )
}

export default Product
