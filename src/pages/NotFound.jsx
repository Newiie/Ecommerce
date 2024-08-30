import Header from '../components/header'
import Footer from '../components/footer'
import NotFoundBody from '../components/NotFoundBody'
import { useActionData, useNavigate } from 'react-router-dom';
import { useApp } from '../hooks/AppProvider';
import { useEffect } from 'react';

const NotFound = () => {
  const navigate = useNavigate();
  const { userId } = useApp();
  
  useEffect(() => {
    if (userId == "") navigate("/login")
  },[])
  return (
    <div>
      <div>
      <Header />
      <NotFoundBody />
      <Footer />
    </div>
    </div>
  )
}

export default NotFound
