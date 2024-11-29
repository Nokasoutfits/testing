import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import CountUp from 'react-countup'

import { styles } from '../styles'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { stock } from '../assets';
import Whyus from '../components/Whyus';

const Stock = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Stock Investments - SwizzFunds</title>
        <meta name="description" content="Supreme Waves Capital now offers all traders the opportunity to
            trade a wide range of the top ranked digital coins 24/7*. Today
            cryptocurrencies have become known to most people as a conventional
            and popular investment option."/>
      </Helmet>
      </HelmetProvider>
      <Navbar/>

      <div className="">

      <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
            <div>
            {/* <h4 className={`${styles.sectionSubText} orange-text-gradient`}>Pricing</h4> */}
            <h2 className={`${styles.sectionHeadText} `}>Stock.</h2>
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
        
        <div className="flex justify-center items-center w-full">
          <img
            src={stock}
            alt=""
            className=" w-full  h-[200px] sm:h-[400px] xl:h-[600px]  mt-3 md:mt-0 rounded-xl shadow-lg"
          />
        </div>
        <div className="pt-[2rem] w-full ">
        <h4 className="text-[22px] sm:text-[28px] text-secondary">
        Trading Stock or Share on SwizzFunds?
          </h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
          A stock or share (also known as a company's "equity") is a financial
            instrument that represents ownership in a company or corporation and
            represents a proportionate claim on its assets (what it owns) and
            earnings (what it generates in profits). Stock ownership implies
            that the shareholder owns a slice of the company equal to the number
            of shares held as a proportion of the company's total outstanding
            shares. For instance, an individual or entity that owns 100,000
            shares of a company with one million outstanding shares would have a
            10% ownership stake in it. Most companies have outstanding shares
            that run into the millions or billions.
            <div className="my-[2rem] flex justify-center items-center"></div>
          </p>
        </div>
       
      </div>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex jusitify-center items-center w-full my-[2rem] mb-20`}>
            <Link to="/stock-plan" className="bg-light px-6 py-3 mx-auto md:text-lg md:px-[5rem]">
             Go to Stock Plans
            </Link>
      </div>
      </div>
      <Whyus/>
      <Footer />
    </div>
  )
}

export default Stock