import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {HelmetProvider, Helmet} from "react-helmet-async"
import CountUp from "react-countup";

import { MdSend } from "react-icons/md";

import { styles } from "../styles";
import { fadeIn, zoomIn } from "../utils/motion";
import Footer from "../components/Footer";
import { Tilt } from "react-tilt";
import Whyus from "../components/Whyus";
import Loading from "../components/Loading";
import isEmpty from "validator/lib/isEmpty";
import emailjs from "@emailjs/browser";

const Contact = () => {
const [fullName, setFullName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const [loading, setLoading] = useState(false)

const handleSubmit = (e)=>{
  e.preventDefault();

if (isEmpty(fullName) || isEmpty(email) || isEmpty(message)) {
  alert("All fields are required to send a feedback")
}else{
  setLoading(true)
  emailjs.send("service_d30otlu", "template_4cjza9n",{
    from_name: fullName,
    to_name: "SwizzFunds",
    from_email: "info@swizzfunds.com",
    message: message,
  },
  "urZKqe5GM27AL1cSZ"
  )
  .then(()=>{
    setLoading(false)
    alert("Thank you for your feedback we will get back to you as soon as posible")
  setFullName("")
  setEmail("")
  setMessage("")
  }).catch((error)=>{
    setLoading(false)
    console.log(error)
    alert("Something went wrong!!")
  })
}
}

  return (
    <div>
      {loading && <Loading/>}
       <HelmetProvider>
      <Helmet>
        <title>Contact - SwizzFunds</title>
        <meta name="description" content=" Get in touch with our support team." />
      </Helmet>
      </HelmetProvider>
      <Navbar />
      <div>
        <div className="black-gradient py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
            <div>
            <h4 className={`${styles.sectionSubText} blue-text-gradient`}>
              Get in touch
            </h4>
            <h2 className={`${styles.sectionHeadText} `}>Contact.</h2>

            </div>
            <div className="hidden sm:block">
              <div>
                <h1 className="text-[24px] sm:text-[30px] font-bold blue-text-gradient">
                  $<CountUp end={5000000} enableScrollSpy={true} /> +
                </h1>
                <p className="">Complete Transactions </p>
              </div>
              <div>
                <h1 className="text-[24px] sm:text-[30px] font-bold mt-6 blue-text-gradient">
                  <CountUp end={35000} enableScrollSpy={true} /> +
                </h1>
                <p className="">Active Investors </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} max-w-7xl mx-auto my-20`}>
          <motion.div variants={zoomIn(0.3, 0.7)}
                initial="hidden"
                whileInView="show" className="text-center">
            <h2 className="text-[24px] pb-4 font-bold">Support Form</h2>
            <p className="text-[16px] sm:text-[20px]">
              Fill in your details and we will get back to you as soon as
              posible
            </p>
          </motion.div>
          <form action="" className="flex flex-col gap-6 mt-10">
            <motion.input 
            variants={fadeIn('right', "spring", 0.3, 2)}
            initial="hidden"
            whileInView="show"
            onChange={(e)=>{setFullName(e.target.value)}}
              type="text"
              placeholder="Full Name"
              name="name"
              className="p-4 text-[16px] sm:text-[18px] rounded-lg border-none outline-none "
            />
            <motion.input
            variants={fadeIn('right', "spring", 0.5, 2)}
            initial="hidden"
            whileInView="show"
            onChange={(e)=>{setEmail(e.target.value)}}
              type="email"
              placeholder="Email Address"
              name="email"
              className="p-4 text-[16px] sm:text-[18px] rounded-lg border-none outline-none "
            />
            <motion.textarea
            variants={fadeIn('right', "spring", 0.7, 2)}
            initial="hidden"
            whileInView="show"
            onChange={(e)=>{setMessage(e.target.value)}}
              name="message"
              rows="10"
              placeholder="Message"
              className="p-4 text-[16px] sm:text-[18px] rounded-lg border-none outline-none "
            />
            <motion.div
            variants={fadeIn('right', "spring", 0.9, 2)}
            initial="hidden"
            whileInView="show" className="flex justify-start">
              <button onClick={handleSubmit} className="text-tertiary bg-white py-4 px-12 rounded-lg text-[16px] sm:text-[18px] flex justify-between items-center gap-2">
                Send <MdSend className="text-[24px]" />
              </button>
            </motion.div>
          </form>
          <div>
            <div
              className={`mx-auto max-w-7xl gap-10 mt-20 flex flex-col sm:flex-row `}
            >
              

              <motion.div
                variants={zoomIn(0.3, 1)}
                initial="hidden"
                whileInView="show"
                className="w-full"
              >
                <Tilt
        className="w-full"
        >
                <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                    <span
                        options={{
                            max: 45,
                            scale: 1,
                            speed: 450
                        }}
                        className='bg-tertiary rounded-[20px] py-5 px-4 lg:px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                    >
                       
                       <h5 className="text-[14px] sm:text-[24px] text-secondary pb-6">
                  Contact Us
                </h5>
                <p className="flex justify-between pt-6 gap-6 items-start lg:text-[18px] text-xs">
                Address: <span>8361 International Dr, Orlando, FL  92810, United States</span>
                </p>
                <p className="flex justify-between pt-6 gap-6 items-start lg:text-[18px] text-xs text-white">
                    Support Email: <span>support@swizzfunds.com</span>
                  </p>
                    </span>
                </motion.div>
            
            </Tilt>
                
              </motion.div>
              <motion.div
                variants={zoomIn(0.5, 1)}
                initial="hidden"
                whileInView="show"
                className="w-full"
              >
                <Tilt
        className="w-full"
        >
                <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                    <span
                        options={{
                            max: 45,
                            scale: 1,
                            speed: 450
                        }}
                        className='bg-tertiary rounded-[20px] py-5 px-4 lg:px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                    >
                       
                       <h5 className="text-[14px] sm:text-[24px] text-secondary pb-6">
                    Write Us
                  </h5>
                  <p className="flex justify-between gap-6 items-start lg:text-[18px] text-xs text-white">
                  Whatsapp/Call: <span>+1(239) 203-8946</span>
                    
                  </p>
                  {/* <p className="flex justify-between gap-6 items-start lg:text-[18px] text-xs text-white">
                  Whatsapp: <span>+44 07771094494</span>
                    
                  </p> */}
                  
                    </span>
                </motion.div>
            
            </Tilt>
                
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Whyus/>
      <Footer />
    </div>
  );
};

export default Contact;
