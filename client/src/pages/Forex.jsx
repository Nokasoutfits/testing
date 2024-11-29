import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import {motion} from "framer-motion";
import CountUp from 'react-countup'

import { styles } from '../styles'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { forex } from '../assets';
import Whyus from '../components/Whyus';

const Forex = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Forex - SwizzFunds</title>
        <meta name="description" content="Supreme Waves Capital now offers all traders the opportunity to
            trade a wide range of the top ranked digital coins 24/7*. Today
            cryptocurrencies have become known to most people as a conventional
            and popular investment option."/>
      </Helmet>
      </HelmetProvider>
      <Navbar/>

      <div>

      <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
            <div>
            {/* <h4 className={`${styles.sectionSubText} orange-text-gradient`}>Pricing</h4> */}
            <h2 className={`${styles.sectionHeadText} `}>Forex.</h2>
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

      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col justify-center items-center`}>
        
        <div className="flex justify-center items-center w-full mt-20">
          <img
            src={forex}
            alt=""
            className=" w-full h-[200px] sm:h-[400px] xl:h-[600px] mt-3 md:mt-0 rounded-xl shadow-lg"
          />
        </div>
        <div className=" mt-20">
        <h4 className="text-[22px] sm:text-[28px] text-secondary">
            Why trade Forex with SwizzFunds?
          </h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
          Forex is a portmanteau of foreign currency and exchange. Foreign
            exchange is the process of changing one currency into another
            currency for a variety of reasons, usually for commerce, trading, or
            tourism. According to a recent triennial report from the Bank for
            International Settlements (a global bank for national central
            banks), the average was more than $5.1 trillion in daily forex
            trading volume. Because of the worldwide reach of trade, commerce,
            and finance, forex markets tend to be the largest and most liquid
            asset markets in the world. Market participants use forex to hedge
            against international currency and interest rate risk, to speculate
            on geopolitical events, and to diversify portfolios, among several
            other reasons.
            <div className="my-[2rem] flex justify-center items-center"></div>
          </p>
        </div>
       
      </div>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex jusitify-center items-center w-full my-[2rem] mb-20`}>
            <Link to="/forex-plan" className="bg-light px-6 py-3 mx-auto md:text-lg md:px-[5rem]">
             Go to Forex Plans
            </Link>
      </div>
      </div>
      <Whyus/>
      <Footer />
    </div>
  )
}

export default Forex