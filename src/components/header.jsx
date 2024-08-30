import Logo from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Heart, Users, Search   } from 'lucide-react';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="header-container" className='font-white'>
      <div className="header-notif | bg-black">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a href="" className='fw-b font-white'>ShopNow</a>
      </div>
      <div className="header-nav | font-black">
        <img src={Logo} alt="Logo" />
        <ul>
            <Link className='font-black hover-underline' to="/">Home</Link>
            <Link className='font-black hover-underline' to="/contact">Contact</Link>
            <Link className='font-black hover-underline' to="/about">About</Link>
            <Link className='font-black hover-underline' to='/signup'>Sign up</Link>
        </ul>

        <div className='flex-center gap1'>
          <div className='search-bar | bg-secondary'>
            <input type="text" placeholder='What are you looking for' />
            <Search className='hover lucide-icon' />
          </div>
          {/* <img src={WishList} alt="WishList" /> */}
          <Heart className='hover lucide-icon' onClick={() => navigate("/")} />
          <ShoppingCart className='hover lucide-icon' onClick={() => navigate("/cart")} />
          {/* <img src={CartInactive} onClick={() => navigate("/cart") } alt="CartInactive" /> */}
          {/* <img src={UserInactive} alt="UserInactive" /> */}
          <Users className='hover lucide-icon' onClick={() => navigate("/account")}/>
        </div>
      </div>
    </div>
  )
}

export default Header
