import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import AccountComponent from '../components/AccountComponent'
import '../stylesFolder/account.css';
import { useApp } from '../hooks/AppProvider';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';


const Account = () => {
    const { userId } = useApp();
    const navigate  = useNavigate();
    const [userData, setUserData] = useState({})
    useEffect(() => {
        const getUserData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/getUserData', {
              params: {
                userId: userId,
              },
            });
            console.log("HANDLE USER DATA", response.data);
            setUserData(response.data)
            // Handle user data here
          } catch (error) {
            console.log("Error ", error);
          }
        }
        getUserData();
      }, [userId]);
  return (
    <div>
        <Header />
           <AccountComponent userData={userData} />
        <Footer />
    </div>
  ) 
}

export default Account
