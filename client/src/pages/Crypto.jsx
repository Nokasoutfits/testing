import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import {motion} from "framer-motion";
import CountUp from 'react-countup'

import { styles } from '../styles'
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { crypto } from '../assets';
import Whyus from '../components/Whyus';

const Crypto = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Crypto Currency Investments - SwizzFunds</title>
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
            <h2 className={`${styles.sectionHeadText} `}>Cryptocurrencies.</h2>
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
            src={crypto}
            alt=""
            className=" w-full h-[200px] sm:h-[400px] xl:h-[600px] mt-3 md:mt-0 rounded-xl shadow-lg"
          />
        </div>
        <div className="pt-[2rem] px-2 w-full">
          <h1 className="text-[22px] sm:text-[28px] text-secondary">
            The New World
          </h1>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
            SwizzFunds now offers all traders the opportunity to
            trade a wide range of the top ranked digital coins 24/7*. Today
            cryptocurrencies have become known to most people as a conventional
            and popular investment option. The main purpose of this new
            technology is to allow people to buy, trade, and invest without the
            need for banks or any other financial institution. Cryptocurrencies
            are highly volatile and can be profitable to any trader’s portfolio.
            Cryptocurrencies are not physical coins they are electronic, a
            digital asset that remains as data. The technology behind the
            cryptocurrency controls a large part of its value which holds new
            technology on the secure way to identify and transfer money. The
            first digital coin introduced was the Bitcoin and today it remains
            as the standard that all other coins compare themselves to.
            Following in its steps came Litecoin, so to date they stand as the
            top 2 highly valued coins on the market. There are several other
            coins also reaching a high-level market share such as Bitcoin and
            Bitcoin Cash, Dash, Ripple, Ethereum and Ethereum Classic.
            <div className="my-[2rem] flex justify-center items-center"></div>
          </p>
        </div>
        <div className="pb-[1rem] px-2  w-full ">
          <h4 className="text-[22px] sm:text-[28px] text-light">
            Why trade Cryptocurrencies with SwizzFunds?
          </h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
            Cryptocurrencies could potentially be the currency of the future
            with more people gaining interest and price value going up. SwizzFunds
            offers competitive spreads, with no commissions charged
            on transactions making it more profitable. When trading with SwizzFunds        
            you are trading on the price changes of the digital
            coin, and not physically purchasing it. Trading with SwizzFunds
            Invest ensures that you will trade with a 100% reputable broker.
          </p>
        </div>
      </div>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex jusitify-center items-center w-full my-[2rem]`}>
            <Link to="/crypto-plan" className="bg-light px-6 py-3 mx-auto md:text-lg md:px-[5rem]">
             Go to Crypto Plans
            </Link>
      </div>
      </div>
      <Whyus/>
      <Footer />
    </div>
  )
}

export default Crypto