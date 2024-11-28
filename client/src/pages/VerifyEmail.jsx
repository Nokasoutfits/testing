import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import success from "../assets/success.png";
import { Helmet, HelmetProvider } from "react-helmet-async";

const VerifyEmail = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const VerifyEmailUrl = async () => {
      try {
        await axios.get(`/api/auth/verify/${param.id}/${param.token}`);
        setValidUrl(true);
      } catch (error) {
        console.log(error, "fecting url");
        setValidUrl(false);
      }
    };
    VerifyEmailUrl();
  }, [param]);
  
  return (
    <div>
          <HelmetProvider>
    <Helmet>
      <title>Verify Email - SwizzFunds</title>
    </Helmet>
    </HelmetProvider>
      {validUrl ? (
        
        <div className="flex justify-center items-center w-[100vw] h-[100vh] flex-col">
          <img src={success} alt="success" className="w-[150px] md:w-[250px]" />
          <h1 className="text-xl md:text-3xl py-4 md:py-6 font-bold">
            Email verification successful!!
          </h1>
          <p className="text-lg md:text-xl">Please click login to continue</p>
          <Link
            to="/login"
            className="btn rounded-full bg-yellow-500 text-black px-[4rem] py-[1rem] mt-4 text-lg"
          >
            Login
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default VerifyEmail;
