/* eslint-disable react/prop-types */
// import Heart from '../assets/heart.png'
// import Eye from '../assets/eye.png'
import { useNavigate } from 'react-router-dom'
import { Star, Eye, Heart } from 'lucide-react';

const Product = ({product}) => {
  const navigate = useNavigate();

  const handleOpenItem = () => {
    console.log("ID " + product._id)
    navigate(`/item/${product._id}`)
  }
  
  return (
    <div className='product' onClick={handleOpenItem} >
      <div className="product-img relative">
        <img src={`data:image/jpeg;base64,${product.images[0].data}`} alt="Product Image" />
        {/* <img className='heart-ic' src={Heart} alt="Heart Icon" /> */}
        <Heart className='prod-img-ic heart-ic hover lucide-icon'/>
        <Eye className='prod-img-ic eye-ic hover lucide-icon ' />
        {/* <img className='eye-ic' src={Eye} alt="Eye Icon" /> */}
      </div>
      <p className='fs-20'>{product.title}</p>
      <p className='secondary2 fs-20 fw-m'>${product.price}</p>
      <div className='product-review'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <p className='fs-20 black7'>(0)</p>
      </div>
    </div>
  )
}

export default Product
