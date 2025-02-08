import React from "react";
import CountUp from "react-countup";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { EstatePlans } from "../../constants/InvestmentData";
const EstatePlane = () => {
  return (
    <div>
      <div>
        <HelmetProvider>
          <Helmet>
            <title>Real Estate Plan - SwizzFunds</title>
          </Helmet>
        </HelmetProvider>
        <Navbar />
        <Navbar />
        <div className="mt-[3rem]">
          <div className="black-gradient  py-10 sm:py-20 sm:mt-[100px] mt-[70px]">
            <div
              className={`${styles.paddingX} max-w-7xl mx-auto flex justify-between`}
            >
              <div>
                {/* <h4 className={`${styles.sectionSubText} orange-text-gradient`}>Pricing</h4> */}
                <h2 className={`${styles.sectionHeadText} `}>
                  Real Estate Plan.
                </h2>
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
          {/* <h4 className='text-2xl py-[1rem] px-[3rem] md:text-2xl font-bold text-left'>Invest on Real Estate</h4> */}
          <div className="max-w-7xl mx-auto flex justify-center items-center flex-col md:flex-row flex-wrap mt-[2rem] mb-20">
            {EstatePlans.map((data) => {
              return (
                <div className="w-[80%] md:w-[400px] p-6 rounded-lg shadow-md md:mx-[1rem] md:my-[1rem]  bg-gradient-to-r from-black to-gray-900  my-2">
                  <h3 className="text-[22px] sm:text-[28px] text-light">
                    # {data.name}
                  </h3>
                  <ul className="text-white pl-6 mt-2 space-y-1 list-decimal list-inside">
                    <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                      -Minimum:{" "}
                      <span className="font-bold">{data.Minimum}</span>
                    </li>
                    <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                      -Maximum:{" "}
                      <span className="font-bold">{data.Maximum}</span>
                    </li>
                    {data.PeopleMax && (
                      <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                        -People Max:{" "}
                        <span className="font-bold">{data.PeopleMax}</span>
                      </li>
                    )}
                    <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                      -Weekly Profit:{" "}
                      <span className="font-bold">{data.WeeklyProfit}</span>
                    </li>
                    <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                      -Monthly Profit:{" "}
                      <span className="font-bold">{data.MonthlyProfit}</span>
                    </li>
                    <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                      -Withdrawal:{" "}
                      <span className="font-bold">{data.Withdrawal}</span>
                    </li>
                    <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                      -Referral Bonus:{" "}
                      <span className="font-bold">{data.ReferralBonus}</span>
                    </li>
                    <li className=" leading-8 text-[18px] xl:text-[20px] mt-6">
                      -Duration:{" "}
                      <span className="font-bold">{data.Duration}</span>
                    </li>
                  </ul>

                  <Link
                    to="/register"
                    className="text-yellow-500 font-bold float-right border border-yellow-500  mt-6 rounded-full px-4"
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EstatePlane;
