import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import hero from "../assets/hero.png";
import { zoomIn, fadeIn } from "../utils/motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={`h-[100vh] w-full relative flex flex-col sm:flex-row justify-between items-center`}
    >
      <motion.div
        className="my-6"
        variants={fadeIn("left", "spring", 0.2, 3)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className={`${styles.heroHeadText} mt-2`}>Invest for the Future.</h1>
        <p className={`text-[16px] leading-8 sm:text-[20px] text-secondary`}>
          Work with all the necessary information and{" "}
          <br className="hidden sm:flex" /> tools to boost money flow from your
          capital <br className="hidden sm:flex" /> investment using SwizzFunds!
        </p>
        <div className="sm:mt-6 mt-6">

        <Link to="/register" className="bg-white sm:text-md text-sm text-tertiary py-4  sm:px-10 px-6 rounded-lg">Get Started</Link>
        </div>
      </motion.div>
      <motion.div
        className=""
        variants={zoomIn(0.5, 2)}
        initial="hidden"
        whileInView="show"
      >
        <img src={hero} alt="hero-img" className="w-[250px] sm:w-[400px] xl:w-[600px]" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Hero, "");
