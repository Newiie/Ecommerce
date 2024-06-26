/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/footer"
import Header from "../components/header"
import Voucher from '../assets/voucher.png'
import LeftArrow from '../assets/leftArrow.png'
import RightArrow from '../assets/rightArrow.png'
import Product from "../components/Product"
import axios from "axios"
import { useEffect, useState } from "react"

            
const Home = () => {
  const [products, setProducts] = useState([])

  const navigate = useNavigate();
  const handleHostEvent = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:3000/',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        console.log("HANDLE HOST EVENT", response.data);
    } catch (error) {
        console.error("Error handling host event:", error);
        navigate("/login")
    }
}

const handleGetProducts = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: 'http://localhost:3000/products',
      headers: {
          'Content-Type': 'application/json'
      },
    })
    console.log("GET PRODUCTS ", response.data);
    setProducts(response.data.products)
  } catch (error) {
    console.error("Error handling get products", error);
      // navigate("/home")
  }
}

useEffect(() => {
    handleHostEvent();
    handleGetProducts();
}, []);

  return (
    <div>
      <Header />
      <div className="home-content">
        <div className="home-nav">
            <Link className="font-black">Woman's Fashion</Link>
            <Link className="font-black">Men's Fashion</Link>
            <Link className="font-black">Electronics</Link>
            <Link className="font-black">Home & Lifestyle</Link>
            <Link className="font-black">Medicine</Link>
            <Link className="font-black">Sports & Outdoor</Link>
            <Link className="font-black">Baby's & Toys</Link>
            <Link className="font-black">Groceries & Pets</Link>
            <Link className="font-black">Health & Beauty</Link>
        </div>
        <img src={Voucher} alt="Voucher" className="home-voucher" />
      </div>
        <div className="home-products mt-3">
            <div className="flex space-between w-100">
                <div className="relative">
                    <p className="home-highlight">Our Products</p>
                    <h2 className="fs-ls">Explore Our Products</h2>
                </div>
                <div className=" flex gap1">
                    <img className="arrow" src={LeftArrow} alt="LeftArrow" />
                    <img className="arrow" src={RightArrow} alt="RightArrow" />
                </div>
            </div>
        </div>
        <div className="home-products-container">
          {
            products.map(product => {
              console.log("Product " + product)
              return (
                <Product key={product.id} product={product}  />
              )
            })
          }
           
        </div>
      <Footer />
    </div>
  )
}

export default Home
