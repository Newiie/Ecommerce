import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Item from './pages/Item.jsx'
import Cart from './pages/Cart.jsx'
import SellerDashboard from './pages/Seller/SellerDashboard.jsx';
import AddProductDescription from './pages/Seller/AddProductDescription.jsx';
import AddProductCategory from './pages/Seller/AddProductCategory.jsx';
import AddProductImages from './pages/Seller/AddProductImages.jsx';
import AddProductPaymentMethod from './pages/Seller/AddProductPaymentMethod.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SellerDashboard/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/item',
    element: <Item />
  },
  {
    path: '/add-product-description',
    element: <AddProductDescription />
  }
  ,
  {
    path: '/add-product-category',
    element: <AddProductCategory />
  }
  ,
  {
    path: '/add-product-images',
    element: <AddProductImages />
  }
  ,
  {
    path: '/add-product-payment-method',
    element: <AddProductPaymentMethod />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
