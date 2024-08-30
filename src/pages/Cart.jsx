import { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import CartItem from '../components/CartItem'
import '../stylesFolder/Cart.css'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../hooks/AppProvider'
import axios from 'axios'

const Cart = () => {
  const { userId, cartData, products, setProducts, SubTotalPrice, setSubtotalPrice, totalPrice, setTotalPrice } = useApp();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (userId === "") {
      navigate("/login");
    }
  }, [userId, navigate]);

  useEffect(() => {
    const getProductData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.data && response.data.product) {
          console.log("Product Data for ID", id, ":", response.data.product);
          return response.data.product; // Return the fetched product data
        } else {
          console.error("Unexpected response structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
      return null; // Return null if there was an error or unexpected response structure
    }

    const reformatProductData = async () => {
      const fetchedProducts = {};
      let subPrice = 0;

      console.log("CART DATA", cartData);
      for (const product of cartData) {
        const productData = await getProductData(product.productID);
        if (productData) {
          fetchedProducts[product.productID] = productData;
          console.log("PRODUCT CART ", product);
          const price = productData.price * product.orderCount;
          subPrice += price;
        } else {
          console.error("Product data is undefined for product ID:", product.productID);
        }
      }
      setSubtotalPrice(subPrice);
      setProducts(fetchedProducts);
      setTotalPrice(subPrice);
      console.log("FETCHED PRODUCTS ", fetchedProducts);
    }

    reformatProductData();
  }, [cartData, setSubtotalPrice, setProducts, setTotalPrice]);

  return (
    <div>
      <Header />
      <div className="cart-container">
        <CartItem product={"Product"} price={"Price"} quantity={"Quantity"} subtotal={"Subtotal"} />
        {cartData.length > 0 && Object.keys(products).length > 0 && cartData.map(cart => {
          const product = products[cart.productID];
          if (product) {
            return (
              <CartItem 
                key={cart.productID} 
                product={product.title} 
                price={product.price} 
                quantity={cart.orderCount} 
                subtotal={cart.orderCount * product.price} 
              />
            );
          } else {
            console.log("Product not found in products object:", cart.productID);
            return null; 
          }
        })}
      </div>
      <div className="btn-container-cart">
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
            <div className="ul-item-price">${SubTotalPrice}</div>
          </div>
          <div className="cart-ul-item">
            <div className="ul-item-nane">Shipping :</div>
            <div className="ul-item-price">Free</div>
          </div>
          <div className="cart-ul-price">
            <div>Total:</div>
            <div className="ul-item-price">${totalPrice}</div>
          </div>
          <button className='cart-btn-2' onClick={() => {
            console.log("CART DATA", cartData)
            console.log("products ", products)
            navigate("/checkout")
          }}>Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
