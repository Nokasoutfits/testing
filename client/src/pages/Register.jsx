import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { styles } from '../styles'
import {FaUser, FaKey, FaMoneyBillAlt, FaArrowRight, FaUserPlus, FaWhatsapp, } from "react-icons/fa"
import {MdCheck, MdEmail, MdSend} from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom'
import { signup } from './config'
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import isEmail from "validator/es/lib/isEmail";
import Loading from '../components/Loading'
import { ErrorMessage, SuccessMessage } from '../components/Message'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Register = () => {
    const [userName, setUserName] = useState("");
    const [fullName, setFUllName] = useState("");
    const [email, setEmail] = useState("");
    const [initialPlan, setInitialPlan] = useState("");
    const [password, setPassword] = useState("");
    const [retypePass, setRetypPass] = useState("");
    const [referrer, setReferralCode] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        if (
            isEmpty(userName) ||
            isEmpty(fullName) ||
            isEmpty(email) ||
            isEmpty(initialPlan) ||
            isEmpty(password) ||
            isEmpty(retypePass) 
          ) {
            setError("All feilds are required")
              
          }else if (!isEmail(email)) {
            setError("Invalid Email")
          }else if (!equals(password,retypePass)) {
            setError("Passwords do not match");
          }else{
            const data = {userName, fullName, email, initialPlan, password, referrer}

            
                    console.log(data)
                    setLoading(true)
                    signup(data)
                    .then((resopnse) => {
                        console.log("Axios Signup success:", resopnse);
                        setLoading(false);
                        setMessage(resopnse.data.successMessage);
                        setTimeout(() => {
                          navigate("/login");
                        }, 2000);
                        setUserName("")
                        setFUllName("")
                        setEmail("")
                        setInitialPlan("")
                        setPassword("")
                        setRetypPass("")
                      })
                      .catch((err) => {
                        console.log("Axios Error: ", err);
                        setLoading(false);
                        setError(err.response.data.errorMessage);
                        
                      });
        }


    }

  return (
    <div>
            {loading && <Loading/>}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        {message && <SuccessMessage>{message}</SuccessMessage>}
        <HelmetProvider>
    <Helmet>
      <title>Register - SwizzFunds</title>
      
    </Helmet>
    </HelmetProvider>
        <Navbar/>
        <div className=''>

        <div className={`mt-[200px] max-w-5xl mx-auto col-span-2  ${styles.paddingX}`}>
            <h1 className={` ${styles.heroHeadText}`}>Welcome!!</h1> 
            <p className={`${styles.sectionSubText}`}>Please fill in your details corectly.</p>
            <form action="" className='grid gap-6 mt-20' onSubmit={handleSubmit}>
                <div className="flex items-center ">
                    <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <FaUser className='text-xl'/>
                    </span>
                 <input type="text" placeholder='Username' onChange={(e)=> setUserName(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg' required/>
                </div>
                <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <FaUser className='text-xl'/>
                    </span>
                 <input type="text" placeholder='Full Name' onChange={(e)=> setFUllName(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg' required/>
                </div>
                <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <MdEmail/>
                    </span>
                 <input type="email" placeholder='Email' onChange={(e)=> setEmail(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg' required/>
                </div>
                <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <MdCheck/>
                    </span>
                 <select onChange={(e)=> setInitialPlan(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg' required>
                    <option className="text-gray-300">Choose initial Plan</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Crypro currency">Crypro Currency</option>
                    <option value="Forex">Forex Investment</option>
                    <option value="Stock/Shares">Stock Investment</option>
                    <option value="Gold">Gold Investment</option>
                </select>
                </div>
                
                <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <FaKey/>
                    </span>
                 <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg ' required/>
                </div>
                <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <FaKey/>
                    </span>
                 <input type="password" placeholder='Confirm Password' onChange={(e)=> setRetypPass(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg' required/>
                </div>
                <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <FaUserPlus/>
                    </span>
                 <input type="text" placeholder='Referral Code (Optional)'  onChange={(e)=> setReferralCode(e.target.value)} className='px-4 py-2 w-full h-12 outline-none rounded-lg' />
                </div>
                <div className='w-full'>
                    <button className='bg-light w-full py-3 px-8 rounded-lg text-tertiary  text-md xl:text-lg flex justify-center items-center gap-2'>Submit <MdSend className='text-xl'/></button>
                </div>
            </form>
                <div className='mt-8 pb-10'>
                    <p className='flex justify-center items-center text-md gap-6'>Already have an account? <Link className='flex justify-center items-center text-md gap-2 border-2 border-light rounded-lg p-2' to="/login">Login <FaArrowRight/> </Link> </p>
                </div>
          <p className='pb-4 text-md xl:text-lg text-secondary text-center mt-6'>2023 SwizzFunds. All Rights Reserved.</p>
        </div>
        </div>
        <div className="fixed bg-green-600 border-2 outline-2 outline-green-600 p-2 rounded-full bottom-[50px] z-50 left-5">
    <a href="https://wa.me/+4407771094494" target='_blank'>
      <FaWhatsapp className='text-4xl'/>
    </a>

  </div>
            </div>
  )
}

export default Register