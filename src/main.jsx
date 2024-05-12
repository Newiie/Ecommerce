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

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/item/:id',
    element: <Item />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
