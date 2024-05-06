import React from 'react';
import Logo from '../assets/Logo.png';
import Magnify from '../assets/magnify.png';
import CartInactive from '../assets/cart-inactive.png';
import UserInactive from '../assets/user-inactive.png';
import WishList from '../assets/wishlist-inactive.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      id="header-container"
      className="font-white"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
      }}
    >
      {/* Header notification - you can hide or minimize it */}
      <div
        className="header-notif bg-black"
        style={{ display: 'none' }}
      >
        <p> </p>
        <a href="" className="fw-b font-white"> </a>
      </div>

      {/* Main header navigation */}
      <div
        className="header-nav font-black"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 20px',
          fontSize: '14px',
        }}
      >
        <img src={Logo} alt="Logo" />
        <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', padding: '0' }}>
          <li><Link className="font-black" to="/Home">Home</Link></li>
          <li>Contact</li>
          <li>About</li>
          <li><Link className="font-black" to='/Signup'>Sign up</Link></li>
        </ul>

        <div
          className="flex-center gap1"
          style={{ display: 'flex', gap: '10px' }}
        >
          <div
            className="search-bar bg-secondary"
            style={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '4px',
              padding: '4px',
            }}
          >
            <input
              type="text"
              placeholder="What are you looking for"
              style={{ padding: '4px 8px' }}
            />
            <img src={Magnify} alt="Magnify" />
          </div>
          <img src={WishList} alt="WishList" />
          <img src={CartInactive} alt="CartInactive" />
          <img src={UserInactive} alt="UserInactive" />
        </div>
      </div>
    </div>
  );
};

export default Header;
