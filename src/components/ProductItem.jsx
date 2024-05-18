import { useState } from 'react'
import Jacket from '../assets/jacket.png'
import StarFilled from '../assets/star-filled.png'
import Heart from '../assets/heart.png'
import '../stylesFolder/ItemStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({product}) => {
    const navigate = useNavigate();
    const [order, setOrder] = useState(0)
    const sizes = ["XS", "S", "M", "L", "XL"]
    const [sizeIndex, setSizeIndex] = useState(0)
  return (
    <div className='item-content'>
      <img src={Jacket} alt="" />
      <div className="item-information-container">
        <p className=' fw-b fs-header'>{product.name || "ASD"}</p>
        <div className="item-review-container">
            <div className="review-star-container flex">
                <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" />
            </div>
        </div>
        <p className='item-price fs-20'>${product.price || "ASD"}</p>
        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
        <hr />
        <div className="size-container flex gap1">
            <p>Size: </p>
            <div className="sizes-items">
                {sizes.map((size, index) => {
                    return <div onClick={() => setSizeIndex(index)} key={size} className={`item-sizes button-item ${index === sizeIndex ? "size-selected" : ""}`}><p>{size}</p></div>
                })}
            </div>
        </div>
        <div className="order-count-container">
            <div className='count-content | flex'>
                <div  onClick={() => setOrder(order - 1)} className="count-btn left-rounded">
                    -
                </div>
                <div className="order-count">{order}</div>
                <div onClick={() => setOrder(order + 1)} className="count-btn right-rounded">
                    +
                </div>
            </div>
            <div onClick={() => {
                navigate("/cart")
            }} className="item-button">Buy Now</div>
            <FontAwesomeIcon icon="fa-regular fa-heart" />
            <img className="button-item" src={Heart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductItem
