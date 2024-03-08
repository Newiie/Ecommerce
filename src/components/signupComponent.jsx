import LoginPicture from '../assets/loginPicture.png'
import GoogleIcon from '../assets/google-icon.png'
import { Link } from 'react-router-dom'

const SignupComponent = () => {
  return (
    <div className='login-container'>
    <img className='loginPicture' src={LoginPicture} alt="LoginPicture" />
    <div className='form-container'>
        <form className="login-form">
            <div className='login-text flex-column'>
                <p className='fs-ls '>Create an account</p>
                <p>Enter your details below</p>
            </div>
            <input className='login-input' type="text" placeholder="Name" />
            <input className='login-input' type="text" placeholder="Email or PhoneNumber" />
            <input className='login-input' type="password" placeholder="Password" />
            <div className='signup-button-container'>
                <button type="submit" className="login-button bg-button2 font-white">Create Account</button>
                <button type="submit" className="login-button bg-white font-black flex gap1 border-black">
                    <img src={GoogleIcon} alt="Google Icon" />
                    Sign up with Google
                    </button>
            
                <p className='black7'>Already have an account? <Link to="/" className='black7 loginLink'>Log in</Link></p>
            </div>
        </form>
    </div>
</div>
  )
}

export default SignupComponent
