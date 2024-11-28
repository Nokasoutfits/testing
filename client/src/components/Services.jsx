import React from 'react'
import { motion } from 'framer-motion'
import {Tilt} from "react-tilt"

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { homeServices } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Link } from 'react-router-dom';

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
        <motion.div variants={textVariant()}>
        <h4 className={`${styles.sectionSubText}`}>What we do</h4>
        <h2 className={`${styles.sectionHeadText}`}>Services.</h2>
        <p className='text-secondary leading-8 text-md xl:text-lg mt-6'>
            By combining easy-to-understand information with actionable insights, our company helps make the market seem less daunting and more approchable.
            </p>
        </motion.div>
        <div className='mt-20 flex flex-wrap gap-10 text-center font-bold'>
            {homeServices.map((service, index)=>(
                <ServiceCard key={service.name} index={index} {...service}/>
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Services, "")