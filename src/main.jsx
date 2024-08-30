import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import Item from './pages/Item.jsx'
import Cart from './pages/Cart.jsx'
<<<<<<<<< Temporary merge branch 1
import SellerDashboard from './pages/Seller/SellerDashboard.jsx';
import AddProductDescription from './pages/Seller/AddProductDescription.jsx';
import AddProductCategory from './pages/Seller/AddProductCategory.jsx';
import AddProductImages from './pages/Seller/AddProductImages.jsx';
import AddProductPaymentMethod from './pages/Seller/AddProductPaymentMethod.jsx';
=========
import NotFound from './pages/NotFound.jsx'
import ContextProvider from './hooks/AppProvider.jsx'
import CheckOut from './pages/CheckOut.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Account from './pages/Account.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/Signup',
    element: <Signup />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/Item',
    element: <Item />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/checkout',
    element: <CheckOut />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/account',
    element: <Account />
  },
  {
    path: '*',
    element: <NotFound />
>>>>>>>>> Temporary merge branch 2
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider >
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
