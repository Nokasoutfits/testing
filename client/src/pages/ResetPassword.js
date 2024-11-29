import axios from "axios";
import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useNavigate, useParams } from "react-router";
import isEmail from "validator/es/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import equals from "validator/lib/equals";
import { ErrorMessage, SuccessMessage } from "../components/Message";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { MdEmail, MdSend } from "react-icons/md";
import { styles } from "../styles";
import Footer from "../components/Footer";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email === " ") {
      setError("Enter your registered email");
    }  else {
      const data = { email };
      setLoading(true);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post("/api/password/forgot", data, config)
        .then((res) => {
          setLoading(false);
          setMessage(res.data.successMessage);
          
        })
        .catch((err) => {
          console.log("forgot api error:", err);
          setLoading(false);
          setError(err.response.data.errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="containerZ">
        <HelmetProvider>
          <Helmet>
            <title>Forgot Password - SwizzFunds</title>
          </Helmet>
        </HelmetProvider>
        <Navbar/>
        {error && <ErrorMessage>{error}</ErrorMessage>}
            {message && <SuccessMessage>{message}</SuccessMessage>}
            {loading && <Loading />}
        <form onSubmit={submitHandler} className="mb-20">
        <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
            <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
              <div>
              <h4 className={`${styles.sectionSubText} blue-text-gradient`}>Please enter the correct details </h4>
              <h2 className={`${styles.sectionHeadText} `}>Forgot Password.</h2>
              </div>
            </div>
          </div>
          <div className="w-full mt-[4rem] ">
            <div className=" mx-auto w-[80%] md:w-[50%] flex flex-col gap-6">
            <div className="flex items-center ">
                <span className='bg-light flex justify-center items-center p-4 h-12 w-12 rounded-lg'>
                    <MdEmail/>
                    </span>
                 <input 
                 type="email" 
                 placeholder="Enter your registered email" 
                 onChange={(e)=> setEmail(e.target.value)} 
                 className='px-4 py-2 w-full h-12 outline-none rounded-lg' 
                 required/>
                </div>
              
              <button className=' bg-light w-full py-3 px-8 rounded-lg text-tertiary  text-md xl:text-lg flex justify-center items-center gap-2'>Submit <MdSend className='text-xl'/></button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { id, token } = useParams();

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password === "" || password2 === "") {
      setError("Choose password");
    } else if (password !== password2) {
      setError("Password do not match");
    } else {
      const data = { password };
      setLoading(true);
      
      await axios
        .post(`/api/password/reset-password/${id}/${token}`, data)
        .then((res) => {
          setLoading(false);
          setMessage(res.data.successMessage);
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        })
        .catch((err) => {
          console.log("forgot api error:", err);
          setLoading(false);
          setError(err.response.data.errorMessage);
        });
    }
  };
  return (
    <div>
      <div className="containerZ">
        <HelmetProvider>
          <Helmet>
            <title>Reset Password - SwizzFunds</title>
          </Helmet>
        </HelmetProvider>
        <Navbar/>
        {error && <ErrorMessage>{error}</ErrorMessage>}
            {message && <SuccessMessage>{message}</SuccessMessage>}
            {loading && <Loading />}
        <form onSubmit={submitHandler} className="mb-10">
        <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
            <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
              <div>
              <h4 className={`${styles.sectionSubText} blue-text-gradient`}>Please enter the correct details </h4>
              <h2 className={`${styles.sectionHeadText} `}>New Password.</h2>
              </div>
            </div>
          </div>
          <div className="w-full mt-[4rem]">
            <div className=" mx-auto w-[80%] md:w-[50%]">
              <input
                className='px-4 py-2 w-full h-12 outline-none rounded-lg'
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                minlength="5"
              />
              <br /> <br />
              <input
                className='px-4 py-2 w-full h-12 outline-none rounded-lg'
                type="password"
                id="password2"
                onChange={(e) => setPassword2(e.target.value)}
                minlength="5"
                placeholder="Confirm new password"
              />
              <br /> <br />
               <button className=' bg-light w-full py-3 px-8 rounded-lg text-tertiary  text-md xl:text-lg flex justify-center items-center gap-2'>Submit <MdSend className='text-xl'/></button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};
