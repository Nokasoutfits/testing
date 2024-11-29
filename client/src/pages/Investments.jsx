import React from 'react'
import CountUp from 'react-countup'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import {motion} from "framer-motion";

import { styles } from '../styles'
import { accountInfo } from '../constants'
import { Link } from 'react-router-dom';
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Whyus from '../components/Whyus';

const ServiceCard = ({name,desc, more, index})=>{
  return(
      <Tilt
      className="xs:w-[500px] w-full"
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
                      <h3 className='text-[20px] xl:text-[28px]'>{name}</h3>
                      <p className='text-md xl:text-xl text-light'>{more}</p>
                      
                      
                  </Link>
              </motion.div>
          
          </Tilt>
  )
}

const Investments = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Account Types - SwizzFunds</title>
        <meta name="description" content=" The SwizzFunds platforms
            allow you instant access to the global markets via your desktop,
            smartphone or other mobile devices. You can open one click trades
            and manage your entire personal portfolio on a single dashboard
            display." />
      </Helmet>
      </HelmetProvider>
      <div>
        <Navbar/>
      <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
            <div>
            <h4 className={`${styles.sectionSubText} orange-text-gradient`}>Pricing</h4>
            <h2 className={`${styles.sectionHeadText} `}>Account Types.</h2>
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

        <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between mb-20`}>
          <div className='mt-20 flex flex-wrap gap-10 text-center font-bold'>
            {accountInfo.map((account, index)=>(
                <ServiceCard key={account.name} index={index} {...account}/>
            ))}
        </div>

        </div>
        
      </div>
      <Whyus/>
      <Footer/>
    </div>
  )
}

export default Investments