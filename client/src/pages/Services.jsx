import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { motion } from 'framer-motion'
import CountUp from "react-countup";
import {Tilt} from "react-tilt"
import { Link } from 'react-router-dom';


import Navbar from "../components/Navbar";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import Footer from "../components/Footer";
import { homeServices } from '../constants';
import Whyus from "../components/Whyus";


const ServiceCard = ({name, desc, icon, index})=>{
  return(
      <Tilt
      className="xs:w-[250px] w-full"
      >
              <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
                  <Link to={`/${desc}`}
                      options={{
                          max: 45,
                          scale: 1,
                          speed: 450
                      }}
                      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                  >
                      <img src={icon} alt="" />
                      {name}
                      
                  </Link>
              </motion.div>
          
          </Tilt>
  )
}

const Services = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Our Services - SwizzFunds</title>
          <meta
            name="description"
            content="SwizzFunds is a regulated broker and financial services provider for
            traders across the world. We are also one of the fastest growing
            online brokers with an asset index of over 1,000 stocks, forex,
            commodities and indices available as CFDs."
          />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <div>
        <div className="black-gradient py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between `}>
            <div>
              <h4 className={`${styles.sectionSubText} pink-text-gradient`}>
                What we do
              </h4>
              <h2 className={`${styles.sectionHeadText} `}>Our Services.</h2>
            </div>
            <div className="hidden sm:block">
              <div>
                <h1 className="text-[24px] sm:text-[30px] font-bold pink-text-gradient">
                  $<CountUp end={5000000} enableScrollSpy={true} /> +
                </h1>
                <p className="">Complete Transactions </p>
              </div>
              <div>
                <h1 className="text-[24px] sm:text-[30px] font-bold mt-6 pink-text-gradient">
                  <CountUp end={35000} enableScrollSpy={true} /> +
                </h1>
                <p className="">Active Investors </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} max-w-7xl mx-auto mb-20`}>
          <div>
            <h3 className={`pt-20 pb-4 text-[22px] sm:text-[30px] font-bold`}>Knowledge is a wise investment</h3>
            <p className={`${styles.sectionSubText} `}>By combining easy to understand information with actionable insights. Our company helps make the market seem less daunting and more approchable.</p>
          </div>
          <div className='mt-20 flex flex-wrap gap-10 text-center font-bold'>
            {homeServices.map((service, index)=>(
                <ServiceCard key={service.name} index={index} {...service}/>
            ))}
        </div>
        </div>
      </div>
      <Whyus/>
      <Footer/>
    </div>
  );
};

export default Services;
