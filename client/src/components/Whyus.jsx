import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import {zoomIn, fadeIn, textVariant } from "../utils/motion";
import { FaUser } from "react-icons/fa";

const Whyus = () => {
  return (
    <div>
      <motion.div variants={textVariant()} className="max-w-7xl mx-auto ">
        <h1 className={`${styles.sectionHeadText}`}>WHY CHOOSE US</h1>
        <p className={`${styles.sectionSubText}`}>
          We are one of the world's leading CFDs broker, proud to offer
          investors a fully customized and regulated way to trade the global
          financial markets.
        </p>
      </motion.div>
      <div className="flex flex-wrap mt-20 gap-10 max-w-7xl mx-auto ">
        <motion.div variants={fadeIn("right", "spring", 0.5, 2)} initial="hidden" whileInView="show" className="text-center max-w-[300px]">
          <h3 className="text-[18px] xl:text-[22px] font-bold py-4 text-white">Security is our top priority</h3>
          <p className="text-md xl:last:text-[18px] text-secondary">
            We use state of the art security measures when handlinh your account
            details and personal funds. Your information is SSL encrypted and
            safely stored
          </p>
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 0.7, 2)} initial="hidden" whileInView="show" className="text-center max-w-[300px]">
        <h3 className="text-[18px] xl:text-[22px] font-bold py-4 text-white">Next Generation platform</h3>
            <p className="text-md xl:last:text-[18px] text-secondary">
              Our ground breaking platform can be easly customized to fit your
              precise level of expertise and trading needs
            </p>
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 0.9, 2)} initial="hidden" whileInView="show" className="text-center max-w-[300px]">
        <h3 className="text-[18px] xl:text-[22px] font-bold py-4 text-white">24/7 Support</h3>
            <p className="text-md xl:last:text-[18px] text-secondary">
              Our dedicated team of customer support experts are always
              available to assist you with every need or request, anywhere you
              are in your native language.
            </p>
        </motion.div>
        <motion.div variants={fadeIn("right", "spring", 1, 2)} initial="hidden" whileInView="show" className="text-center max-w-[300px]">
        <h3 className="text-[18px] xl:text-[22px] font-bold py-4 text-white">Firm Regulation</h3>
            <p className="text-md xl:last:text-[18px] text-secondary">
              SwizzFunds complies with the strictest regulation guigelines,
              under IFSC (International Financial Services Commission), to ensure
              the safest trading conditions.
            </p>
        </motion.div>
      </div>
      <motion.div className="mt-20 bg-tertiary py-8 px-6 rounded-lg" variants={zoomIn(0.5, 1)} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} `}>For more infomation about us, we are here.</p>
        <div className="flex flex-wrap justify-between gap-6">
          {/* <div className="mt-6 w-[300px]">
            <h3 className="text-light flex items-center gap-2 mb-2"> Patrick Smith <FaUser className="bg-primary rounded-full text-white"/></h3>
            <span className='text-[16px]  text-white'>Whatsapp: +1 (239) 203-8946</span>
            <p className='text-[16px]  text-white'>Email: ps9562708@gmail.com</p>
          </div> */}
          <div className="mt-6 w-[350px]">
            <h3 className="text-light flex items-center gap-2 mb-2"> Christine <FaUser className="bg-primary rounded-full text-white"/></h3>
            {/* <span className='text-[16px]  text-white'>Whatsapp: +4407771094494</span> */}
            <p className='text-[16px] text-white'>Email: christineschmidt1470@gmail.com</p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Whyus, "");
