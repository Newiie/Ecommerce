import { Link, useNavigate } from 'react-router-dom'
import LoginPicture from '../assets/loginPicture.png'

const LoginComponent = () => {
    const navigate  = useNavigate();
    const handleLogin = () => {
        navigate ("/Home")
    }

  return (
    <div className='login-container'>
        <img className='loginPicture' src={LoginPicture} alt="LoginPicture" />
        <div className='form-container'>
            <div className="login-form">
                <div className='login-text flex-column'>
                    <p className='fs-ls '>Log in to Exclusive</p>
                    <p>Enter your details below</p>
                </div>
                <input className='login-input' type="text" placeholder="Email or PhoneNumber" />
                <input className='login-input' type="password" placeholder="Password" />
                <div>
                    <button type="submit" onClick={handleLogin} className="login-button bg-button2 font-white">Login</button>
                    {/* <Link to={"/Home"} className="login-button bg-button2 font-white">Login</Link> */}
                    <a href="" className='secondary2'>Forget Password?</a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default LoginComponent
