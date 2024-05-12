import { Link, useNavigate } from 'react-router-dom'
import LoginPicture from '../assets/loginPicture.png'
import { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
    const navigate  = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:3000/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    email,
                    password
                }
            });
            console.log("HANDLE LOGIN", response);
            
            navigate("/");
        } catch (error) {
            navigate ("/login")
        }
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
                <input value={email} onChange={(e) => setEmail(e.target.value)} className='login-input' type="text" placeholder="Email or PhoneNumber" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} className='login-input' type="password" placeholder="Password" />
                <div>
                    <button type="submit" onClick={() => handleLogin()} className="login-button bg-button2 font-white">Login</button>
                    <Link to={"/"} href="" className='secondary2'>Forget Password?</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent
