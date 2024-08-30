import { Link, useNavigate } from 'react-router-dom'
import AboutPicture from '../assets/aboutPicture.png'
import Service1 from '../assets/service1.png'
import Service2 from '../assets/service2.png'
import Service3 from '../assets/service3.png'
import Service4 from '../assets/service4.png'
import Service5 from '../assets/service5.png'
import Service6 from '../assets/service6.png'
import Service7 from '../assets/service7.png'
import Person1 from '../assets/person1.png'
import Twitter from '../assets/twitter2.png'
import Instagram from '../assets/instagram2.png'
import LinkedIn from '../assets/linkedin2.png'
import '../stylesFolder/About.css'

const AboutComponent = () => {
  const navigate = useNavigate();
  return (
    <div id="about-container" className='font-white'>
       
        <div id='desc'>
            <h1>
                Our Story
            </h1>
                <p>
                Launced in 2015, Exclusive is South Asias premier online shopping <br/>
                makterplace with an active presense in Bangladesh. Supported <br/>
                by wide range of tailored marketing, data and service solutions, <br/>
                Exclusive has 10,500 sallers and 300 brands and serves 3 <br/>
                millioons customers across the region. 
                </p>
                <p>
                Exclusive has more than 1 Million products to offer, growing at a <br/>
                very fast. Exclusive offers a diverse assotment in categories <br/>
                ranging  from consumer.
                </p>
            </div>
    <div id='pic'>
      <img className='aboutPicture' src={AboutPicture} alt="AboutPicture" />
      </div>    

  <div className="grid-container">
    <div className="grid-item">
        <img src={Service1} alt="Service1" />
        <h3>10.5K</h3>
        <p>Sellers active in our site</p>
    </div>
    <div className="grid-item">
        <img src={Service2} alt="Service2" />
        <h3>10.5K</h3>
        <p>Monthly product sale</p>
    </div>
    <div className="grid-item">
        <img src={Service3} alt="Service3" />
        <h3>10.5K</h3>
        <p>Customers active in our site</p>
    </div>
    <div className="grid-item">
        <img src={Service4} alt="Service4" />
        <h3>10.5K</h3>
        <p>Annual gross sale in our site</p>
    </div>
  </div>

  <div className="grid-container2">
    <div className="grid-item2">
        <img src={Person1} alt="Person1" />
        <h4>Name</h4>
        <h5>Company Position</h5>
          <div className='images'>
                 <img src={Twitter} alt="" />
                 <img src={Instagram} alt="" />
                 <img src={LinkedIn} alt="" />
          </div>
    </div>
    <div className="grid-item2">
        <img src={Person1} alt="Person1" />
        <h4>Name</h4>
        <h5>Company Position</h5>
        <div className='images'>
                 <img src={Twitter} alt="" />
                 <img src={Instagram} alt="" />
                 <img src={LinkedIn} alt="" />
          </div>
    </div>
    <div className="grid-item2">
        <img src={Person1} alt="Person1" />
        <h4>Name</h4> 
        <h5>Company Position</h5>
        <div className='images'>
                 <img src={Twitter} alt="" />
                 <img src={Instagram} alt="" />
                 <img src={LinkedIn} alt="" />
          </div>
    </div>
  </div>

  <div className="grid-container3">
      <div className="grid-item3">
          <img src={Service5} alt="Service5" />
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all order over 140</p>
      </div>
      <div className="grid-item3">
          <img src={Service6} alt="Service6" />
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
      </div>
      <div className="grid-item3">
          <img src={Service7} alt="Service7" />
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
      </div>
  </div>

    </div>
  )
}

export default AboutComponent
