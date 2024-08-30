import { Link, useNavigate } from 'react-router-dom';
// import '../stylesFolder/account.css';

const AccountComponent = ({userData}) => {
  const navigate = useNavigate();
  return (
    <div id="account-container" className='font-white'>
        <div className='sidebar3'>
           <h3>Manage My Account</h3>
            <ul>
                <li><Link className='font-black' to="/">My Profile</Link></li>
                <li><Link className='font-black' to="/">Address Book</Link></li>
                <li><Link className='font-black' to="/">My Payment Options</Link></li>
            </ul>
           <h3>My Orders</h3>
           <ul>
                <li><Link className='font-black' to="/">My Returns</Link></li>
                <li><Link className='font-black' to="/">My Cancellations</Link></li>
            </ul>
           <h3>My Wishlist</h3>
        </div> 

        <div className="container2">
            <h5> Edit Your Profile</h5>
            <label  id='fname'>First Name:</label>
            <label className='lname'>Last Name:</label><br/>
            <input value={userData.name} type="text" placeholder="" required/>
            {/* <label>Last Name:</label> */}
            <input type="text" placeholder="" required/>
            <br/>
            <label id='email'>Email:</label>
            <label className='address'>Address:</label><br/>
            <input value={userData.email}  type="text" placeholder="" required/>
            {/* <label>Address:</label> */}
            <input type="text" placeholder="" required/>
             <br/>
            <label>Password Changes:</label><br/>
         
            <input className='password' type="text" placeholder="Current Password" required/><br/>
            <input className='password' type="text" placeholder="New Password" required/><br/>
            <input className='password' type="text" placeholder="Confirm New Password" required/>
            <button id='cancel'>Cancel</button>
            <button id='sendMessage'>Send Message</button>
        </div>
    </div>
  )
}

export default AccountComponent;
