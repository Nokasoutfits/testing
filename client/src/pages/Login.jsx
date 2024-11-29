import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { styles } from '../styles'
import {FaUser, FaKey, FaMoneyBillAlt, FaArrowRight, FaWhatsapp, } from "react-icons/fa"
import {MdEmail, MdSend} from "react-icons/md"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { signin } from './config'
import Loading from '../components/Loading'
import { isAuthenticated, setAuthentication } from '../constants/auth'
import { ErrorMessage } from '../components/Message'
import { Helmet, HelmetProvider } from 'react-helmet-async'
const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();


  const handleSubmit = (e)=>{
    e.preventDefault()

    const data = {email, password}

    setLoading(true)
    signin(data)
    .then((response) => {
      setAuthentication(response.data.token, response.data.user);
      const redirect = location.search.split("=")[1];

      if (isAuthenticated() && isAuthenticated().role === 1) {
        console.log("redirect to admin dash");
        
        navigate("/admin-dashboard");
      } else if (
        isAuthenticated() &&
        isAuthenticated().role === 0 &&
        !redirect
      ) {
        console.log("redirect to user dash");
        navigate("/user-dashboard");
      } else {
        navigate("/");
      }
    })
    .catch((err) => {
      console.log("Signin api error:", err);
      setLoading(false);
      setError(err.response.data.errorMessage);
    });

}

  

  return (
    <div>
      {loading && <Loading/>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <HelmetProvider>
    <Helmet>
      <title>Login - SwizzFunds</title>
      
    </Helmet>
    </HelmetProvider>
    <Navbar/>
    <div className='flex flex-col justify-center items-center h-[100vh]'>

    <div className={`mt-[150px] max-w-5xl mx-auto col-span-2  ${styles.paddingX}`}>
        <h1 className={` ${styles.heroHeadText}`}>Welcome Back!!</h1> 
        <p className={`${styles.sectionSubText}`}>Please fill in your details corectly.</p>
        <form action="" className='grid gap-6 mt-20' onSubmit={handleSubmit}>
            <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                <MdEmail className='text-xl'/>
                </span>
             <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg'/>
            </div>
            
            <div className="flex items-center ">
            <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                <FaKey/>
                </span>
             <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg'/>
            </div>
            
            <div className='w-full'>
                <button className='bg-light w-full py-3 px-8 rounded-lg text-tertiary  text-md xl:text-lg flex justify-center items-center gap-2'>Submit <MdSend className='text-xl'/></button>
            </div>
        </form>
            <div className='mt-8 pb-10 flex flex-col lg:flex-row items-center gap-6 justify-between '>
                <p className='flex justify-center items-center text-md gap-6'>Don't have an account? <Link className='flex justify-center items-center text-md gap-2 border-2 border-light rounded-lg p-2' to="/register">Register</Link> </p>
                <div className='flex justify-center items-center gap-4 '>
                  <p className='text-sm '>Forgot Password?</p>
                <Link to="/forgot-password" className='text-sm text-white p-2 bg-light rounded-lg'>Reset</Link>

                </div>
            </div>
      <p className='pb-4 text-md xl:text-lg text-secondary text-center mt-6'>2023 SwizzFunds. All Rights Reserved.</p>
    </div>
    </div>
    <div class="fixed bg-green-600 border-2 outline-2 outline-green-600 p-2 rounded-full bottom-[50px] z-50 left-5">
    <a href="https://wa.me/+4407771094494" target='_blank'>
      <FaWhatsapp className='text-4xl'/>
    </a>

  </div>
        </div>
  )
}

export default Login