import axios from "axios";
import ProductItem from "../components/ProductItem"
import Footer from "../components/footer"
import Header from "../components/header"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useApp } from "../hooks/AppProvider";

const Item = () => {
  let { id } = useParams();
  const [product, setProduct] = useState({})

  const navigate = useNavigate();
  const { userId } = useApp();
  
  useEffect(() => {
    if (userId == "") navigate("/login")
  },[])

  const handleGetItem = async () => {
    const response = await axios({
      method: "GET",
      url: `http://localhost:3000/products/${id}`,
      headers: {
          'Content-Type': 'application/json'
      },
    })

    console.log("PROD ITEM ", response.data.product)
    setProduct(response.data.product)
  }

  useEffect(() => {
    handleGetItem();
  }, [])

  return (
    <div>
        <Header />
        <ProductItem product={product}/>
        <Footer />
    </div>
  )
}

export default Item
