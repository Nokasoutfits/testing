import React from 'react'
import CountUp from 'react-countup'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {motion} from "framer-motion";

import { styles } from '../styles'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Whyus from '../components/Whyus';

const Legal = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Legal Information - SwizzFunds</title>
      </Helmet>
      </HelmetProvider>
      <Navbar/>
      <div>

          <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
            <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
              <div>
              <h4 className={`${styles.sectionSubText} orange-text-gradient`}>A complete list of our legal policies, <br /> terms & conditions and client <br />
            contracts.</h4>
              <h2 className={`${styles.sectionHeadText} `}>Legal.</h2>
              </div>
              <div className="hidden sm:block">
                <div>
                  <h1 className="text-[24px] sm:text-[30px] font-bold orange-text-gradient">
                    $<CountUp end={5000000} enableScrollSpy={true} /> +
                  </h1>
                  <p className="">Complete Transactions </p>
                </div>
                <div>
                  <h1 className="text-[24px] sm:text-[30px] font-bold mt-6 orange-text-gradient">
                    <CountUp end={35000} enableScrollSpy={true} /> +
                  </h1>
                  <p className="">Active Investors </p>
                </div>
              </div>
            </div>
          </div>

          <div>
          <div className={`${styles.paddingX} max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20`} >
          <div className="bg-tertiary  text-center py-10 px-6 w-full rounded-lg h-[400px] ">
            <h3 className='text-[16px] mt-10'>Terms  and Conditions</h3>
            <p className='mt-6 text-secondary'>
              Please make sure you read and understand our terms before you
              start trading with us.
            </p>
            <button className="mt-10 bg-light py-4 px-8 text-md rounded-lg">
              <Link to="/terms-and-condition">Read Now</Link>
            </button>
          </div>
          <div className="bg-tertiary  text-center py-10 px-6 w-full rounded-lg h-[400px] ">
            <h3 className='text-[16px] mt-10' >Privacy Policy</h3>
            <p className='mt-6 text-secondary'>
              Our broad data protection policy reflects our high-end security
              standards.
            </p>
            <button className="mt-10 bg-light py-4 px-8 text-md rounded-lg">
              <Link to="/privacy">Read Now</Link>
            </button>
          </div>
          <div className="bg-tertiary  text-center py-10 px-6 w-full rounded-lg h-[400px] ">
            <h3 className='text-[16px] mt-10 '>Registrations</h3>
            <p className='mt-6 text-secondary'>
              SwizzFunds is duely registered with American Trading Council
              (ATC)
            </p>
          </div>
        </div>
          </div>

      </div>
      <Whyus/>
      <Footer/>
    </div>
  )
}

export default Legal