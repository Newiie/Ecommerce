/* eslint-disable react/prop-types */
import { useState } from 'react'
import Jacket from '../assets/jacket.png'
// import StarFilled from '../assets/star-filled.png'
// import Heart from '../assets/heart.png'
import '../stylesFolder/ItemStyle.css'
import { useApp } from '../hooks/AppProvider'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const ProductItem = ({product}) => {
    const { userId } = useApp();

    const [order, setOrder] = useState(0)
    const sizes = ["XS", "S", "M", "L", "XL"]
    const [sizeIndex, setSizeIndex] = useState(0)

    const navigate = useNavigate();
    const handleBuyNow = async () => {
        try {
            const response = await axios({
                method: "POST",
                url: "http://localhost:3000/addCart",
                data: {
                    userId,
                    productID: product._id,
                    orderCount: order,
                    orderSize: sizes[sizeIndex]
                }
            })

            console.log("RESPONSE " + response)
            if (response.status == 200) navigate("/cart")
        } catch (error) {
            console.error("Error handling host event:", error);
        }
    }

  return (
    <div className='item-content'>
      {/* <img src={product.images.length > 0 ? `data:image/jpeg;base64,${product.images[0].data}` : Jacket} alt="" /> */}
      {product.images && product.images.length > 0 ? (
        <img src={`data:image/jpeg;base64,${product.images[0].data}`} alt="" />
        ) : (
        <img src={Jacket} alt="" />
        )}
      <div className="item-information-container">
        <p className=' fw-b fs-header'>{product.title || "ASD"}</p>
        <div className="item-review-container">
            <div className="review-star-container flex">
                {/* <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" />
                <img src={StarFilled} alt="" /> */}
            </div>
        </div>
        <p className='item-price fs-20'>${product.price}</p>
        <p>{product.description || "SAMPLE DESC"}</p>
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
            <div className="item-button" onClick={() => {
                console.log("PRODUCT " + product.id)
                console.log("USER ID " + userId)
                console.log("ORDER COUNT " + order)
                handleBuyNow();
            }} >Buy Now</div>
            {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
            {/* <img className="button-item" src={Heart} alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default ProductItem
