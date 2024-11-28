import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full ">
      <motion.div variants={textVariant()}>
        <h4 className={`${styles.sectionSubText}`}>Who we are</h4>
        <h2 className={`${styles.sectionHeadText}`}>About Us.</h2>
        <p className="text-secondary leading-8 xl:leading-10 text-[18px] xl:text-[20px] mt-6">
          SwizzFunds is a regulated broker and financial services provider for
          traders across the world. We are also one of the fastest growing
          online brokers with an asset index of over 1,000 stocks, forex,
          commodities and indices available as CFDs. The SwizzFunds platforms
          allow you instant access to the global markets via your desktop,
          smartphone or other mobile devices. You can open one click trades and
          manage your entire personal portfolio on a single dashboard display.
        </p>
      </motion.div>
      <motion.div variants={fadeIn("left", "spring", 0.5, 2)} initial="hidden" whileInView="show">
        <p className="text-secondary leading-8 xl:leading-10 text-[18px] xl:text-[20px] mt-6">
          SwizzFunds has the professional expertise and the technical resources
          to provide you with a top quality trading experience. We also have a
          strong reputation for financial competence, integrity and honesty. Our
          reputation is important to us and we understand that maintaining a
          good name as a broker requires constant effort and innovation. As an
          SwizzFunds trader you’ll benefit from our continual investment in the
          latest financial technology and our commitment to provide new assets
          and financial instruments.
        </p>
      </motion.div>
      <div className="sm:mt-6 mt-10">
        <Link
          to="/about"
          className="bg-white sm:text-md xl:text-lg text-sm text-tertiary py-4  sm:px-10 px-6 rounded-lg"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "");
