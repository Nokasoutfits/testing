import React from "react";
import { motion } from "framer-motion";
import {HelmetProvider, Helmet} from "react-helmet-async"
import CountUp from "react-countup";

import { styles } from "../styles";
import { fadeIn, zoomIn } from "../utils/motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whyus from "../components/Whyus";

const About = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>About - SwizzFunds</title>
        <meta name="description" content=" The SwizzFunds platforms
            allow you instant access to the global markets via your desktop,
            smart phone or other mobile devices. You can open one click trades
            and manage your entire personal portfolio on a single dashboard
            display." />
      </Helmet>
      </HelmetProvider>

      <Navbar />
      <div className=" ">
        <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
          <div className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}>
            <div>
            <h4 className={`${styles.sectionSubText} orange-text-gradient`}>Our company</h4>
            <h2 className={`${styles.sectionHeadText} `}>About Us.</h2>
            </div>
            <div className="hidden sm:block">
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
        <motion.div
          variants={fadeIn("right", "'spring", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.paddingX} mt-20  max-w-7xl mx-auto bg-tertiary py-10 rounded-lg`}
        >
          <h4 className="text-[22px] sm:text-[28px] text-secondary">Who We Are</h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
            SwizzFunds is a regulated broker and financial services provider for
            traders across the world. We are also one of the fastest growing
            online brokers with an asset index of over 1,000 stocks, forex,
            commodities and indices available as CFDs. The SwizzFunds platforms
            allow you instant access to the global markets via your desktop,
            smartphone or other mobile devices. You can open one click trades
            and manage your entire personal portfolio on a single dashboard
            display.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "'spring", 0.7, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.paddingX} mt-20  max-w-7xl mx-auto bg-tertiary py-10 rounded-lg`}
        >
          <h4 className="text-[22px] sm:text-[28px] text-secondary">Why SwizzFuds?</h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
            SwizzFunds has the professional expertise and the technical
            resources to provide you with a top quality trading experience. We
            also have a strong reputation for financial competence, integrity
            and honesty. Our reputation is important to us and we understand
            that maintaining a good name as a broker requires constant effort
            and innovation. As an SwizzFunds trader you’ll benefit from our
            continual investment in the latest financial technology and our
            commitment to provide new assets and financial instruments. <br />{" "}
            <br />
            SwizzFunds has the professional expertise and the technical
            resources to provide you with a top quality trading experience. We
            also have a strong reputation for financial competence, integrity
            and honesty. Our reputation is important to us and we understand
            that maintaining a good name as a broker requires constant effort
            and innovation. As an Spiratrusts trader you’ll benefit from our
            continual investment in the latest financial technology and our
            commitment to provide new assets and financial instruments.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "'spring", 0.9, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.paddingX} mt-20  max-w-7xl mx-auto bg-tertiary py-10 rounded-lg`}
        >
          <h4 className="text-[22px] sm:text-[28px] text-secondary">
            Benefits of Trading with SwizzFunds
          </h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
            CFDs are increasingly becoming the first choice of investment for
            modern traders. They allow you complete independence and the ability
            to build a personal portfolio that suits your budget and financial
            goals.
          </p>
          <div className=" flex flex-col sm:flex-row mt-6 gap-8 sm:gap-[10rem]">
            <motion.div variants={zoomIn( 0.3, 1)}
            initial="hidden"
            whileInView="show" className="flex flex-col justify-between gap-2 rounded-lg">
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                24/7 Customer Service
              </span>
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                Multi-lingual Live Support
              </span>
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                Personal Account Managers
              </span>
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                Choice of Trading Accounts
              </span>
            </motion.div>
            <motion.div variants={zoomIn( 0.5, 1)}
            initial="hidden"
            whileInView="show" className="flex flex-col justify-between gap-2 rounded-lg">
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                {" "}
                Advanced charts and analysis tools
              </span>
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                Live Charts and Data
              </span>
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                Easy Account Management
              </span>
              <span className=" leading-8 text-[18px] xl:text-[20px]">
                Fast Deposits and Withdrawals
              </span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "'spring", 1.2, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.paddingX} mt-20  max-w-7xl mx-auto bg-tertiary py-10 rounded-lg`}
        >
          <h4 className="text-[22px] sm:text-[28px] text-secondary">Our Vission</h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
            Our vision is to make secure low cost investing a reality for
            millions of people around the world. SwizzFunds is founded on the
            simple defining principles of technical innovation, financial
            education and sustainable investing. Our honesty, transparency and
            commitment to customer service has built a base of loyal traders who
            have stayed with SwizzFunds, and continue to grow with us as long
            term trading partners.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", "'spring", 1, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.paddingX} mt-20 mb-20 max-w-7xl mx-auto bg-tertiary py-10 rounded-lg`}
        >
          <h4 className="text-[22px] sm:text-[28px] text-secondary">Your Security</h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-6">
            At SwizzFunds, your trading portfolio is always safe. We’ve
            developed a completely new standard of trading innovation. But
            technology alone isn’t complete if it’s not backed up with
            authorization. Our traders are able to benefit from safe and secured
            trading conditions:
          </p>
        </motion.div>

        <div className={`${styles.paddingX} mx-auto max-w-7xl gap-10 mt-6 flex flex-col sm:flex-row `}>
          <motion.div
            variants={zoomIn( 0.2, 1)}
            initial="hidden"
            whileInView="show"
            className="relative bg-tertiary p-6 rounded-[24px] w-full max-w-[500px]  py-10"
          >
            <h5 className="text-[20px] sm:text-[24px] text-secondary pb-6">Segregated client accounts</h5>
            <p className="flex flex-col justify-start items-start text-[18px]">
              In financial trading, a segregated account is an account, where client funds are being held separately from the broker’s funds. <br /> <br /> 
              At SwizzFunds, all client’s funds are segregated and safeguarded by reputable credit institutions. Additionally, SwizzFunds continuously monitors its operations as per its regulatory requirement and submitting of financial reports.
            </p>
          </motion.div>

          <motion.div
            variants={zoomIn( 0.3, 1.1)}
            initial="hidden"
            whileInView="show"
            className="relative bg-tertiary p-6 rounded-[24px] w-full max-w-[500px] py-10"
          >
            <h5 className="text-[22px] sm:text-[24px] text-secondary pb-6">Encryption and protection</h5>
            <p className="flex flex-col justify-start items-start text-[18px]">
              Using state-of-the-art security measures, we treat your account with complete confidentiality.
              <br /> <br /> 
              Your information and funds are always SSL encrypted and securely stored. Additionally, our site is regularly monitored to protect you from credit card fraud and identity theft.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("right", "'spring", 1.2, 0.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.paddingX} mt-20 mb-20  max-w-7xl mx-auto bg-tertiary py-10 rounded-lg`}
        >
          <h4 className="text-[22px] sm:text-[28px] text-secondary">Customer Service</h4>
          <p className=" leading-8 text-[18px] xl:text-[20px] mt-4 mb-6 ">
          If you have questions, need technical support, or assistance with your account management, you can contact Spiratrusts customer service at any time. Our support staff and account managers are ready to help and ensure that you get the very most out of your trading experience.
          </p>
          <div className="sm:py-6 py-6">
        <Link to="/contact" className="bg-white sm:text-[18px] text-[16px] text-tertiary py-4  sm:px-10 px-6 rounded-lg">Contact Us</Link>
        </div>
        </motion.div>
      </div>
      <Whyus/>
      <Footer />
    </div>
  );
};

export default About;
