import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { zoomIn, slideIn } from '../utils/motion'
import { Link } from 'react-router-dom'
import male from '../assets/male.png'



const Steps = () => {
  return (
    <>
    
    <motion.div 
    className='bg-tertiary w-full h-auto pb-20'>
      <div className={`${styles.padding} max-w-7xl mx-auto relative z-0 flex flex-col-reverse sm:flex-row justify-between items-center`}>
      <h2 className="text-white text-[26px] sm:text-[32px] font-bold ">Begin trading in three steps</h2>
        <Link to="/register" className='bg-white text-md py-4 px-6 rounded-lg text-tertiary mb-4'>Open Account</Link>
      </div>

      <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 flex justify-between items-center`}>
        <div className='max-w-[500px]'>
          <motion.div variants={slideIn("left", "spring", 0.2, 2)} initial='hidden' whileInView="show" className='border-light border-2 px-4 py-8 flex justify-between items-center my-6 rounded-[24px]'>

            <span className='bg-light w-[50px] h-[50px] rounded-full flex justify-center items-center p-6 text-xl mr-4'>1</span>
            <div>
              <h6 className='text-secondary font-bold text-[18px]'>Register</h6>
              <p className='mt-2 text-md leading-8'>Create an account in few minutes, verify your email and you are set to go.</p>
            </div>
          </motion.div>
          
          <motion.div variants={slideIn("left", "spring", 0.2, 2)} initial='hidden' whileInView="show" className='border-2 px-4 py-8 flex justify-between items-center my-6 rounded-[24px]'>
            <span className='border-light border-2 w-[50px] h-[50px] rounded-full flex justify-center items-center p-6 text-xl mr-4'>2</span>
            <div>
              <h6 className='text-secondary font-bold text-[18px]'>Deposit</h6>
              <p className='mt-2 text-md leading-8'>Choose a deposit plan and payment method that is convenient for you, sit back and watch.</p>
            </div>
          </motion.div>
          <motion.div variants={slideIn("left", "spring", 0.2, 2)} initial='hidden' whileInView="show" className='border-2 px-4 py-8 flex justify-between items-center my-6 rounded-[24px]'>
            <span className='border-light border-2 w-[50px] h-[50px] rounded-full flex justify-center items-center px-6 text-xl mr-4'>3</span>
            <div>
              <h6 className='text-secondary font-bold text-[18px]'>Withdraw</h6>
              <p className='mt-2 text-md leading-8'>As soon as your deposit plan duration is completed, you can withdraw directly to your wallet.</p>
            </div>
          </motion.div>
        </div>
        <motion.div variants={zoomIn(0.5, 1)} initial="hidden" whileInView="show">
          <img src={male} alt="male-model" className="hidden sm:block w-[500px] ml-20" />
        </motion.div>
      </div>
    </motion.div>
    </>

  )
}

export default Steps