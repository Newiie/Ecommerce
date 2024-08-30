import Header from '../components/header'
import SignupComponent from '../components/signupComponent'
import Footer from '../components/footer'
import { useApp } from '../hooks/AppProvider'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const {userId} = useApp();
  const navigate = useNavigate();
  useEffect(() => {
    if (userId != "") navigate("/")
  }, [])
  return (
    <div>
      <Header />
        <SignupComponent />
      <Footer />
    </div>
  )
}

export default Signup
