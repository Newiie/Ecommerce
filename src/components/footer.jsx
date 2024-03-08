import LogoWhite from '../assets/logo-white.png'
import Plane from '../assets/Plane.png'
import QR from '../assets/QR.png'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'
import LinkedIn from '../assets/linkedin.png'

const Footer = () => {
  return (
    <div className='footer-container | bg-black'>
        <div className='font-text'>
            <img src={LogoWhite} alt="LogoWhite" />
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <label htmlFor="" className='search-email flex'>
                <input  className='font-text' type="text" placeholder='Enter your email'/>
                <img src={Plane} alt="plane" />
            </label>
        </div>
        <div className='font-text'>
            <p className='fs-header'>Support</p>
            <p>111 Bijoy sarani, Dhaka, <br/>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div className='font-text'>
            <p className='fs-header'>Quick Link</p>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div className='font-text'>
            <p className='fs-header'>Download App</p>
            <p className='fs-s text-shade'>Save $3 with App New User Only</p>
            <img src={QR} alt="" />
            <div className='flex gap1'>
                 <img src={Facebook} alt="" />
                 <img src={Twitter} alt="" />
                 <img src={Instagram} alt="" />
                 <img src={LinkedIn} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
