import React from 'react'
import {motion} from "framer-motion";

import {SectionWrapper} from "../hoc"
import {styles} from '../styles'
import { accountInfo } from '../constants';
import { Link } from 'react-router-dom';
import { fadeIn } from '../utils/motion';
import { Tilt } from 'react-tilt';


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

const Account = () => {
  return (
    <div>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>Our packages</p>
        <h3 className={`${styles.sectionHeadText}`}>Account Types.</h3>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10 text-center font-bold'>
            {accountInfo.map((account, index)=>(
                <ServiceCard key={account.name} index={index} {...account}/>
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Account, "")