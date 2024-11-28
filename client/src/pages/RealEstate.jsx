import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import {motion} from "framer-motion";
import CountUp from 'react-countup'

import { styles } from '../styles'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import {house, house1, house2, house3, house4, house5, house6, home1, home2, home3, home4, home5, home6 } from '../assets';
import Whyus from '../components/Whyus';


const RealEstate = () => {
  return (
    <div className=''>
      <HelmetProvider>
      <Helmet>
        <title>Real Estate Investments - SwizzFunds</title>
        
      </Helmet>
      </HelmetProvider>
      <Navbar/>

      <div className={``}>

      <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
            <div>
            {/* <h4 className={`${styles.sectionSubText} orange-text-gradient`}>Pricing</h4> */}
            <h2 className={`${styles.sectionHeadText} `}>Real Estate.</h2>
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

      <div className={`${styles.paddingX} max-w-7xl mx-auto mt-20`}>
        
        <div>
          <img
            src={house}
            alt="house"
            className=" w-full h-[250px] md:h-[600px] mt-3 md:mt-0 rounded-xl shadow-lg"
          />
        </div>

        <div >
        
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6 mb-20">
          Real estate investment involves the purchase, ownership,
              management, rental and/or sale of real estate for profit.
              Improvement of realty property as part of a real estate investment
              strategy is generally considered to be a sub-specialty of real
              estate investing called real estate development. Real estate is an
              asset form with limited liquidity relative to other investments
              (such as stocks or bonds that openly trade on financial markets).
              It is also capital intensive (although capital may be gained
              through mortgage leverage) and is highly cash flow dependent. If
              these factors are not well understood and managed by the investor,
              real estate becomes a risky investment.
          </p>

          {/* <div className="container mx-auto">
            <div>
              <h1 className='text-center py-10 text-2xl font-bold lg:text-4xl'> Hot Deals From Real Estate</h1>
            </div>
          <div className="grid-cols-3 p-2 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div className="w-full rounded">
              <img src={house2} alt="front-view" />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <img src={house1} alt="gym" />
            </div>
            <div className="w-full rounded">
              <img src={house3} alt="kitchen" />
            </div>
            <div className="w-full rounded">
              <img src={house4} alt="bedroom" />
            </div>
            <div className="w-full rounded">
              <img src={house5} alt="sitting-room" />
            </div>
            <div className="w-full rounded">
              <img src={house6} alt="view" />
            </div>
          </div>
          <div className="text-center mb-[5rem]" data-aos="fade-up" data-aos-delay="550">
            <h3 className="font-bold text-xl md:text-3xl mt-1">$3,799,000</h3>
            <p className="text-lg md:text-xl py-1">Price Per Unit $949,750</p>
            <p className="text-lg md:text-xl py-1 px-4 md:px-[7rem]">
              To make an offer, contact our support team on our live chat
              located at the right hand of your screen or you can send us a direct
              mail at <i className='text-light'>support@swizzfunds.com</i>
            </p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid-cols-3 p-2 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div className="w-full rounded">
              <img src={home2} alt="front-view" />
            </div>
            <div className="w-full col-span-2 row-span-2 rounded">
              <img src={home1} alt="gym" />
            </div>
            <div className="w-full rounded">
              <img src={home3} alt="kitchen" />
            </div>
            <div className="w-full rounded">
              <img src={home4} alt="bedroom" />
            </div>
            <div className="w-full rounded">
              <img src={home5} alt="sitting-room" />
            </div>
            <div className="w-full rounded">
              <img src={home6} alt="view" />
            </div>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="550">
            <h3 className="font-bold text-xl md:text-3xl mt-1">$77,000,000</h3>
            <p className="text-lg md:text-xl py-1">Price Per Unit $289,474</p>
            <p className="text-lg md:text-xl py-1 px-4 md:px-[7rem]">
              To make an offer, contact our support team on our live chat
              located at the right hand of your screen or you can send us a direct
              mail at <i className='text-light'>support@swizzfunds.com</i>
            </p>
          </div>
        </div> */}
        </div>
       
      </div>
      <div className={` max-w-7xl flex justify-center items-center mx-auto my-[2rem]  mb-20`}>
            <Link to="/real-estate-plan" className="bg-light px-6 py-3  md:text-lg md:px-[5rem]">
             Go to Real Estate Plans
            </Link>
      </div>
      </div>
      <Whyus/>
      <Footer />
    </div>
  )
}

export default RealEstate