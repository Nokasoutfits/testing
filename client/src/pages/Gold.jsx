import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import {motion} from "framer-motion";
import CountUp from 'react-countup'

import { styles } from '../styles'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { gold } from '../assets';
import Whyus from '../components/Whyus';

const Gold = () => {
  return (
    <div>
      <HelmetProvider>
    <Helmet>
      <title>Gold - SwizzFunds</title>
      
    </Helmet>
    </HelmetProvider>
    <Navbar/>
    <div>
    <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
            <div>
            {/* <h4 className={`${styles.sectionSubText} orange-text-gradient`}>Pricing</h4> */}
            <h2 className={`${styles.sectionHeadText} `}>Gold.</h2>
            </div>
            <div className="hidden xl:block">
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
    </div>

    <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col justify-center items-center`}>
        
        <div className="flex justify-center items-center w-full mt-20">
          <img
            src={gold}
            alt=""
            className=" w-full h-[200px] sm:h-[400px] lg:h-[500px] xl:h-[650px] mt-3 md:mt-0 rounded-xl shadow-lg"
          />
        </div>
        <div className=" mt-20">
        <h4 className="text-[22px] sm:text-[28px] text-secondary">
        Trading Gold on SwizzFunds
          </h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
          Commonly seen as a great store of wealth, this precious metal is
            also known as a reliable safe-haven asset. With a rich history
            amongst almost all global cultures, gold remains a highly popular
            investment. Although it has multiple uses, its primary function is
            typically to hedge against inflation in an often volatile futures
            market, as well as to diversify existing Precious Metals Investment
            Retirement Accounts. Gold has been one of the most valuable precious
            metals throughout human history, used by elites as a symbol of
            wealth for centuries due to its rarity and its ability to hold its
            worth for a long time. Historically, it has been the most common way
            to pass on one’s wealth as an inheritance from one generation to the
            next. Gold is considered a worthy investment, with coins and bars
            available for purchase in various sizes, ranging from one gram to a
            whopping 400 ounces. Being the most reliable investment commodity
            available, gold has proven to be a perfect way to diversify your
            investment portfolio and an excellent safeguard against volatile
            currency.
            <div className="my-[2rem] flex justify-center items-center"></div>
          </p>
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex jusitify-center items-center w-full my-[2rem] mb-20`}>
            <Link to="/gold-plan" className="bg-light px-6 py-3 mx-auto md:text-lg md:px-[5rem]">
             Go to Gold Plans
            </Link>
      </div>
        </div>
       
      </div>
      {/* <div className={`${styles.paddingX} max-w-7xl mx-auto flex jusitify-center items-center w-full my-[2rem] mb-20`}>
            <Link to="/forex-plan" className="bg-light px-6 py-3 mx-auto md:text-lg md:px-[5rem]">
             Go to Forex Plans
            </Link>
      </div> */}
      <Whyus/>
    <Footer/>
    </div>
  )
}

export default Gold