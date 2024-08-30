import { Link, useNavigate } from 'react-router-dom';
import Phone from '../assets/icons-phone.png';
import Email from '../assets/icons-mail.png';
import '../stylesFolder/contact.css';

const ContactComponent = () => {
  const navigate = useNavigate();
  return (
    <div id="contact-container" className='font-white'>
        <div className='sidebar'>
            <div className='sidebar1'>
                <img src={Phone} alt="phone" />
                <h3>Call To Us</h3>
                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +8801611112222</p>
            </div>

            <div className="line"></div>

            <div className='sidebar2'>
                <img src={Email} alt="email" />
                <h3>Write To Us</h3>
                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@exclusive.com</p>
                <p>Emails: support@exclusive.com</p>
            </div>
        </div>

       <div className="container">
            <input type="text" placeholder="Your Name" required/>
            <input type="text" placeholder="Your Email" required/>
            <input type="text" placeholder="Your Phone" required/>
            <textarea placeholder="Your Message" required></textarea>
            <button>Send Message</button>
        </div>
    </div>
  )
}

export default ContactComponent;
