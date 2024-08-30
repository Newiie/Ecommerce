import LoginPicture from '../assets/loginPicture.png'
import GoogleIcon from '../assets/google-icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const SignupComponent = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3000/register', {
                name,
                email,
                password
            });
            console.log("HANDLE REGISTER", response.data);
            
            navigate("/login");
        } catch (error) {
            console.error("Error handling register:", error);
            navigate("/signup")
        }
    }

  return (
    <div className='login-container'>
    <img className='loginPicture' src={LoginPicture} alt="LoginPicture" />
    <div className='form-container'>
        <form className="login-form">
            <div className='login-text flex-column'>
                <p className='fs-ls '>Create an account</p>
                <p>Enter your details below</p>
            </div>
             <input value={name} onChange={(e) => setName(e.target.value)} className='login-input' type="text" placeholder="Name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='login-input' type="email" placeholder="Email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='login-input' type="password" placeholder="Password" />
            <div className='signup-button-container'>
                <button onClick={() => handleRegister()} type="submit" className="login-button bg-button2 font-white">Create Account</button>
                <button type="submit" className="login-button bg-white font-black flex gap1 border-black">
                    <img src={GoogleIcon} alt="Google Icon" />
                    Sign up with Google
                    </button>
            
                <p className='black7'>Already have an account? <Link to="/login" className='black7 loginLink'>Log in</Link></p>
            </div>
        </form>
    </div>
</div>
  )
}

export default SignupComponent
