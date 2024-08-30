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
import { useApp } from "../hooks/AppProvider"

            
const Home = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  const { userId } = useApp();
  useEffect(() => {
    if (userId == "") navigate("/login")
  },[])

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
    setProducts(response.data)
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
            <Link to="#" className="font-black hover-underline ">Woman's Fashion</Link>
            <Link to="#" className="font-black hover-underline ">Men's Fashion</Link>
            <Link to="#" className="font-black hover-underline ">Electronics</Link>
            <Link to="#" className="font-black hover-underline ">Home & Lifestyle</Link>
            <Link to="#" className="font-black hover-underline ">Medicine</Link>
            <Link to="#" className="font-black hover-underline ">Sports & Outdoor</Link>
            <Link to="#" className="font-black hover-underline ">Baby's & Toys</Link>
            <Link to="#" className="font-black hover-underline ">Groceries & Pets</Link>
            <Link to="#" className="font-black hover-underline ">Health & Beauty</Link>
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
                <Product key={product._id} product={product}  />
              )
            })
          }
           {products.length > 0 ? (
              <Product product={products[0]} />
            ) : (
              <p>Loading...</p>
            )}
        </div>
      <Footer />
    </div>
  )
}

export default Home
