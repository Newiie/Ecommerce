import Logo from '../assets/Logo.png'
import Magnify from '../assets/magnify.png'
import CartInactive from '../assets/cart-inactive.png'
import UserInactive from '../assets/user-inactive.png'
import WishList from '../assets/wishlist-inactive.png'

const Header = () => {

  return (
    <div id="header-container" className='font-white'>
      <div className="header-notif | bg-black">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <a href="" className='fw-b font-white'>ShopNow</a>
      </div>
      <div className="header-nav | font-black">
        <img src={Logo} alt="Logo" />
        <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign up</li>
        </ul>

        <div className='flex-center gap1'>
          <div className='search-bar | bg-secondary'>
            <input type="text" placeholder='What are you looking for' />
            <img src={Magnify} alt="Magnify" />
          </div>
          <img src={WishList} alt="WishList" />
          <img src={CartInactive} alt="CartInactive" />
          <img src={UserInactive} alt="UserInactive" />
        </div>
      </div>
    </div>
  )
}

export default Header
